/**
 * Test Configuration for Template Customization
 *
 * This file contains all content-specific values used in E2E tests.
 * When customizing this template for a new organization, update these
 * values to match your content instead of modifying individual test files.
 *
 * This makes it easy to:
 * 1. Identify what needs to change when using the template
 * 2. Keep tests working with customized content
 * 3. Maintain a single source of truth for test expectations
 */

export const testConfig = {
  /**
   * Social Media Links Configuration
   * Used in: tests/social-links.spec.ts
   */
  socialLinks: {
    facebook: {
      url: 'facebook.com/nu4children',
      ariaLabel: 'Facebook',
    },
    instagram: {
      url: 'instagram.com/nu4children',
      ariaLabel: 'Instagram',
    },
  },

  /**
   * Copyright Configuration
   * Used in: tests/copyright.spec.ts
   */
  copyright: {
    // No validated EIN/501(c)(3) status yet, so the footer does not claim
    // "US 501(c)(3) Non-Profit" status (see src/lib/site.config.ts NOT_YET_AVAILABLE).
    text: 'All Rights Reserved by Nurses United 4 Children',
    searchText: 'All Rights Reserved',
    // The permanent "Supported by Free For Charity" attribution (FFC footer
    // standard) — keep these expectations when customizing the template.
    linkUrl: 'https://freeforcharity.org',
    linkText: 'Free For Charity',
  },

  /**
   * Google Tag Manager Configuration
   * Used in: tests/google-tag-manager.spec.ts
   *
   * NOTE: this is still the Free For Charity template's own GTM container.
   * A dedicated GTM container for Nurses United 4 Children has not yet been
   * provisioned (see the `analytics-provisioning` skill) — tracked as a
   * follow-up, not part of this migration.
   */
  googleTagManager: {
    id: 'GTM-TQ5H8HPR',
  },

  /**
   * Logo Configuration
   * Used in: tests/footer-only.spec.ts
   */
  logo: {
    headerAlt: 'Nurses United 4 Children',
  },

  /**
   * Cookie Consent Configuration
   * Used in: tests/cookie-consent.spec.ts
   */
  cookieConsent: {
    bannerHeading: 'We Value Your Privacy',
    modalHeading: 'Cookie Preferences',
    buttons: {
      acceptAll: 'Accept All',
      declineAll: 'Decline All',
      customize: 'Customize',
      savePreferences: 'Save Preferences',
      cancel: 'Cancel',
    },
  },
}
