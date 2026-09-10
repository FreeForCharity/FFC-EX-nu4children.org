import React from 'react'
import { render, screen } from '@testing-library/react'

import HomePage from '../../src/app/home-page'

describe('HomePage (app/home-page)', () => {
  it('should render without crashing', () => {
    render(<HomePage />)
  })

  it('should render the hero heading', () => {
    render(<HomePage />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Ending Child Exploitation/ })
    ).toBeInTheDocument()
  })

  it('should render an About Us section linking to the full page', () => {
    render(<HomePage />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText('Read More').closest('a')).toHaveAttribute('href', '/about-us')
  })

  it('should render the three "What We Offer" cards', () => {
    render(<HomePage />)
    for (const title of ['Services', 'Volunteering', 'Partnership']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('should link Donate Now to the donate page', () => {
    render(<HomePage />)
    const donateLinks = screen.getAllByText('Donate Now')
    for (const link of donateLinks) {
      expect(link.closest('a')).toHaveAttribute('href', '/donate')
    }
  })

  it('should render Mission and Vision sections', () => {
    render(<HomePage />)
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    expect(screen.getByText('Our Vision')).toBeInTheDocument()
  })
})
