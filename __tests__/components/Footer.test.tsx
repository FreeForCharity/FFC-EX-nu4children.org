import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '../../src/components/footer'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

describe('Footer component', () => {
  it('should render the footer', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
  })

  it('should NOT display the Endorsements section (no validated EIN/Candid profile)', () => {
    render(<Footer />)
    expect(screen.queryByText('Endorsements')).not.toBeInTheDocument()
    expect(screen.queryByText(/EIN:/)).not.toBeInTheDocument()
    expect(screen.queryByAltText('GuideStar Platinum Seal of Transparency')).not.toBeInTheDocument()
  })

  it('should NOT claim 501(c)(3) status in the copyright bar (no validated EIN/Candid profile)', () => {
    render(<Footer />)
    expect(screen.queryByText(/501\(c\)\(3\)/)).not.toBeInTheDocument()
  })

  it('should display Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
  })

  it('should display Contact Us section with contact information', () => {
    render(<Footer />)
    // "Contact Us" appears twice (the Column 3 heading and the Quick Links
    // entry pointing at /contact-us) — assert the heading specifically.
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('should have social media links', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should display the current year in copyright', () => {
    render(<Footer />)
    const currentYear = new Date().getFullYear()
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
  })

  it('should have email contact link', () => {
    render(<Footer />)
    const emailLink = screen.getByText('nu4c2020@gmail.com').closest('a')
    expect(emailLink).toHaveAttribute('href', 'mailto:nu4c2020@gmail.com')
  })

  it('should NOT render a phone contact block (no phone found on the source site)', () => {
    render(<Footer />)
    expect(screen.queryByText('Call Us Today')).not.toBeInTheDocument()
  })

  it('should display the Nurses United 4 Children Policy section', () => {
    render(<Footer />)
    expect(screen.getByText('Nurses United 4 Children Policy')).toBeInTheDocument()
  })

  it('should have all social media links with correct aria-labels', () => {
    render(<Footer />)
    for (const { href, label } of [
      { label: 'Facebook', href: 'https://www.facebook.com/nu4children' },
      { label: 'Instagram', href: 'https://www.instagram.com/nu4children' },
    ]) {
      const link = screen.getByLabelText(label)
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', href)
    }
  })

  it('should have social media links open in new tabs', () => {
    render(<Footer />)
    const fbLink = screen.getByLabelText('Facebook')
    expect(fbLink).toHaveAttribute('target', '_blank')
    expect(fbLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should have policy links with correct hrefs', () => {
    render(<Footer />)
    const policyLinks = [
      { text: 'Nurses United 4 Children Privacy Policy', href: '/privacy-policy' },
      { text: 'Nurses United 4 Children Cookie Policy', href: '/cookie-policy' },
      { text: 'Nurses United 4 Children Terms of Service', href: '/terms-of-service' },
      // FFC's own donation policy: label hardcoded to FFC on purpose.
      { text: 'Free For Charity Donation Policy', href: '/free-for-charity-donation-policy' },
      // The charity's own donation policy (label follows siteConfig.name
      // interpolation on the other entries, but this one is fixed).
      { text: 'Donation Policy', href: '/donation-policy' },
    ]

    for (const { text, href } of policyLinks) {
      const link = screen.getByText(text).closest('a')
      expect(link).toHaveAttribute('href', href)
    }
  })

  it('should have quick links with real page routes and the hub login link', () => {
    render(<Footer />)
    const quickLinks = [
      { text: 'Home', href: '/' },
      { text: 'About Us', href: '/about-us' },
      { text: 'Team', href: '/team' },
      { text: 'Gala', href: '/event' },
      { text: 'Our Impact', href: '/blog' },
      { text: 'Donate', href: '/donate' },
      { text: 'Volunteer', href: '/volunteer' },
      { text: 'Contact Us', href: '/contact-us' },
    ]

    for (const { text, href } of quickLinks) {
      // "Contact Us" also appears as the Column 3 heading, so disambiguate
      // by taking whichever match is itself inside an <a>.
      const matches = screen.getAllByText(text)
      const link = matches.map((el) => el.closest('a')).find((a) => a !== null)
      expect(link).toHaveAttribute('href', href)
    }

    // FFC footer standard: the hub login link is always rendered and points
    // at siteConfig.supportedBy.hubUrl.
    const hubLink = screen.getByText('Supported Charity Login').closest('a')
    expect(hubLink).toHaveAttribute('href', 'https://freeforcharity.org/hub/')
    expect(hubLink).toHaveAttribute('target', '_blank')
    expect(hubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should have a Google Maps link for the address', () => {
    render(<Footer />)
    // The address link has no aria-label (WCAG 2.5.3 label-in-name: the
    // visible text is the accessible name, with sr-only "(opens in Google
    // Maps)" context appended), so query it by its visible label text.
    const address = screen.getByText('Address').closest('a')

    expect(address).toHaveAttribute(
      'href',
      'https://www.google.com/maps/search/?api=1&query=Fort+Lauderdale%2C+FL'
    )
    expect(address).toHaveTextContent('Fort Lauderdale, FL')
  })

  it('should display the permanent "Supported by Free For Charity" attribution in copyright bar', () => {
    render(<Footer />)
    const copyright = screen.getByText((_, node) => {
      return (
        node?.tagName.toLowerCase() === 'p' && node.textContent?.includes('All Rights Reserved')
      )
    })
    // FFC footer standard: the attribution is always rendered and links to FFC.
    expect(copyright).toHaveTextContent('Supported by Free For Charity')
    const link = screen.getByText('Free For Charity')
    expect(link.closest('a')).toHaveAttribute('href', 'https://freeforcharity.org')
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
