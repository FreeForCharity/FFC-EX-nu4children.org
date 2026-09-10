import { test, expect } from '@playwright/test'

/**
 * Team + Footer smoke tests.
 *
 * The team roster lives on its own /team route (not the home page — the
 * migrated site has real content pages, unlike the bare template).
 */

test.describe('Team page', () => {
  test('should render the Team section with 7 members', async ({ page }) => {
    await page.goto('/team/')

    await expect(page.getByRole('heading', { name: 'Meet Our Team' })).toBeVisible()

    // Cards render an initials monogram, not a photo — there are no team images.
    const memberPhotos = page.locator('#team img')
    await expect(memberPhotos).toHaveCount(0)

    for (const member of [
      'Sandra Louissaint',
      'Pascale Valbrune',
      'Frantz Richard',
      'Maguy Julmice',
      'Rozeline Simonis',
      'Mirta Antoine',
      'Jenny Eugene',
    ]) {
      await expect(page.getByRole('heading', { level: 3, name: member })).toBeVisible()
    }
  })
})

test.describe('Footer', () => {
  test('should render the Footer on the home page', async ({ page }) => {
    await page.goto('/')

    await expect(page.locator('footer')).toBeVisible()
    await expect(page.getByRole('heading', { name: 'Quick Links' })).toBeVisible()
    // exact: true — the home page also has a "Contact Us Today" heading,
    // which substring-matches "Contact Us" otherwise.
    await expect(
      page.locator('footer').getByRole('heading', { name: 'Contact Us', exact: true })
    ).toBeVisible()
  })
})
