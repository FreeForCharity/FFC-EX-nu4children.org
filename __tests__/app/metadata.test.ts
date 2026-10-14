import { siteMetadata } from '../../src/lib/siteMetadata'

describe('Site metadata', () => {
  it('should have the correct metadataBase URL', () => {
    expect(siteMetadata.metadataBase?.toString()).toBe('https://nu4children.org/')
  })

  it('should have a title containing the organization name', () => {
    const title = siteMetadata.title as { default: string; template: string }
    expect(title.default).toContain('Nurses United 4 Children')
    expect(title.template).toContain('Nurses United 4 Children')
  })

  it('should have a description mentioning children', () => {
    expect(siteMetadata.description).toContain('child')
    expect(siteMetadata.description!.length).toBeGreaterThan(50)
  })

  it('should have relevant keywords', () => {
    const keywords = siteMetadata.keywords as string[]
    expect(keywords).toContain('nonprofit')
    expect(keywords).toContain('charity')
    expect(keywords).toContain('volunteer')
  })

  it('should define OpenGraph fields', () => {
    const og = siteMetadata.openGraph as Record<string, unknown>
    expect(og.type).toBe('website')
    expect(og.siteName).toBe('Nurses United 4 Children')
    expect(og.url).toBe('https://nu4children.org/')
    expect(og.images).toBeDefined()
  })

  it('should define Twitter card fields with no site handle (none found on the source site)', () => {
    const twitter = siteMetadata.twitter as Record<string, unknown>
    expect(twitter.card).toBe('summary_large_image')
    expect(twitter.site).toBeUndefined()
  })

  it('should allow indexing and following', () => {
    const robots = siteMetadata.robots as Record<string, unknown>
    expect(robots.index).toBe(true)
    expect(robots.follow).toBe(true)
  })

  it('should define icon and manifest paths', () => {
    expect(siteMetadata.manifest).toBeDefined()
    expect(siteMetadata.icons).toBeDefined()
  })
})
