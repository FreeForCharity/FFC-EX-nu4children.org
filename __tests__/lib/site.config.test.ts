import {
  canonicalPath,
  cardDescription,
  NOT_YET_AVAILABLE,
  siteConfig,
  sitePath,
  siteUrl,
  twitterSite,
} from '../../src/lib/site.config'

const originalBasePath = process.env.NEXT_PUBLIC_BASE_PATH

afterEach(() => {
  if (originalBasePath === undefined) {
    delete process.env.NEXT_PUBLIC_BASE_PATH
  } else {
    process.env.NEXT_PUBLIC_BASE_PATH = originalBasePath
  }
})

describe('siteConfig contract', () => {
  it('exposes the full site identity shape used by runtime consumers', () => {
    expect(siteConfig).toMatchObject({
      name: 'Nurses United 4 Children',
      tagline: 'Ending Child Exploitation, Building Brighter Futures',
      url: 'https://freeforcharity.github.io',
      // No official Twitter/X account was found on the live site.
      twitterHandle: '',
      contactEmail: 'nu4c2020@gmail.com',
      vulnerabilityDisclosurePath: '/vulnerability-disclosure-policy',
    })
    expect(siteConfig.description).toContain('non-profit')
    expect(siteConfig.shortDescription.length).toBeGreaterThan(0)
    expect(siteConfig.keywords).toEqual(
      expect.arrayContaining(['nonprofit', 'charity', 'volunteer'])
    )
    expect(siteConfig.social.map((link) => link.label)).toEqual(['Facebook', 'Instagram'])
    // No validated EIN or Candid/GuideStar profile exists for this
    // organization yet — the footer standard (Level 1) requires these to
    // hold the NOT_YET_AVAILABLE sentinel rather than a guess (the shared
    // schema requires non-empty strings, so '' is not available here),
    // which suppresses the 501(c)(3) claim and the Endorsements column
    // (see Footer.test.tsx).
    expect(siteConfig.ein).toBe(NOT_YET_AVAILABLE)
    expect(siteConfig.guidestar).toEqual({
      profileUrl: NOT_YET_AVAILABLE,
      directProfileUrl: NOT_YET_AVAILABLE,
    })
    // No phone number was found on the live site.
    expect(siteConfig.phone).toEqual({ display: NOT_YET_AVAILABLE, tel: NOT_YET_AVAILABLE })
    expect(siteConfig.addresses.map((address) => address.label)).toEqual(['Address'])
    for (const address of siteConfig.addresses) {
      expect(address.mapUrl).toMatch(/^https:\/\/www\.google\.com\/maps\//)
    }
    // Permanent "Supported by" footer attribution (FFC footer standard) — the
    // values are intentionally FFC's and must survive template customization.
    expect(siteConfig.supportedBy).toEqual({
      name: 'Free For Charity',
      url: 'https://freeforcharity.org',
      hubUrl: 'https://freeforcharity.org/hub/',
    })
    // Standalone charity by default: no "a project of" parent organization.
    expect(siteConfig.parentOrg).toBeUndefined()
  })

  it('builds same-origin absolute site URLs in the served (canonical) shape', () => {
    delete process.env.NEXT_PUBLIC_BASE_PATH
    // sitePath() is basePath-only and deliberately slash-agnostic.
    expect(sitePath('/')).toBe('/')
    expect(sitePath('/privacy-policy')).toBe('/privacy-policy')
    // canonicalPath() owns the trailingSlash policy; siteUrl() applies both.
    expect(canonicalPath('/')).toBe('/')
    expect(canonicalPath('/privacy-policy')).toBe('/privacy-policy/')
    expect(siteUrl('/')).toBe('https://freeforcharity.github.io/')
    expect(siteUrl('/privacy-policy')).toBe('https://freeforcharity.github.io/privacy-policy/')
    // Files are served verbatim and must not gain a slash.
    expect(siteUrl('/sitemap.xml')).toBe('https://freeforcharity.github.io/sitemap.xml')
    expect(() => siteUrl('privacy-policy')).toThrow(TypeError)
    expect(() => siteUrl('//example.com')).toThrow(TypeError)
    expect(() => canonicalPath('//example.com')).toThrow(TypeError)
  })

  it('builds same-origin URLs that include the GitHub Pages base path', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/FFC-EX-nu4children.org'

    expect(sitePath('/')).toBe('/FFC-EX-nu4children.org/')
    expect(sitePath('/privacy-policy')).toBe('/FFC-EX-nu4children.org/privacy-policy')
    expect(siteUrl('/')).toBe('https://freeforcharity.github.io/FFC-EX-nu4children.org/')
    expect(siteUrl('/privacy-policy')).toBe(
      'https://freeforcharity.github.io/FFC-EX-nu4children.org/privacy-policy/'
    )
    expect(siteUrl('/sitemap.xml')).toBe(
      'https://freeforcharity.github.io/FFC-EX-nu4children.org/sitemap.xml'
    )
  })

  it('normalizes card metadata helpers', () => {
    // No Twitter/X handle is configured for this organization.
    expect(twitterSite()).toBeUndefined()
    expect(cardDescription()).toBe(siteConfig.shortDescription)
  })
})
