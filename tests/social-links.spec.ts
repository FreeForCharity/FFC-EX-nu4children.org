import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

/**
 * Social Links Tests
 *
 * These tests verify that:
 * 1. Social media links are present and functional
 * 2. Defunct platforms (like Google+) are not present
 * 3. All social icons link to correct destinations
 *
 * Note: Test expectations use values from test.config.ts for easy customization
 */

const socialLinks = Object.values(testConfig.socialLinks)

test.describe('Footer Social Links', () => {
  test('should not contain Google+ social link', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Check that Google+ link is not present
    const googlePlusLink = page.locator('footer a[href*="plus.google.com"]')
    await expect(googlePlusLink).toHaveCount(0)

    // Also check that Google Plus label is not present
    const googlePlusLabel = page.locator('footer a[aria-label="Google Plus"]')
    await expect(googlePlusLabel).toHaveCount(0)
  })

  test('should display active social media links', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    for (const social of socialLinks) {
      const link = page.locator(`footer a[href*="${social.url}"]`)
      await expect(link).toBeVisible()
      await expect(link).toHaveAttribute('aria-label', social.ariaLabel)
    }
  })

  test('should have exactly the configured number of social media icons', async ({ page }) => {
    // Navigate to the homepage
    await page.goto('/')

    // Count all social media links in the footer, identified by aria-label
    // matching one of the configured platform names.
    const selector = socialLinks
      .map((social) => `footer a[aria-label="${social.ariaLabel}"]`)
      .join(', ')
    const socialMediaLinks = page.locator(selector)
    await expect(socialMediaLinks).toHaveCount(socialLinks.length)
  })
})
