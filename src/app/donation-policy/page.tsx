import type { Metadata } from 'next'
import { siteUrl } from '@/lib/site.config'

export const metadata: Metadata = {
  title: 'Donation Policy',
  description: 'Donation Policy for the Nurses United 4 Children website',
  // Own canonical: without it Next inherits the layout's, which points at the home page.
  alternates: { canonical: siteUrl('/donation-policy') },
}

export default function DonationPolicy() {
  return (
    <main id="main-content" className="ffc-container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-[var(--font-faustina)] text-[48px] leading-[60px] mb-8">
          Donation Policy
        </h1>

        <div className="prose max-w-none font-[var(--font-lato)] text-[18px] leading-[28px]">
          <p>
            <strong>Effective Date:</strong> September 10, 2026
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Tax Deductibility
          </h2>
          <p>
            Nurses United 4 Children Inc. has not yet published a validated federal Employer
            Identification Number (EIN) or 501(c)(3) determination letter on this site. Please
            consult your tax advisor regarding the deductibility of any donation, and contact us
            using the information below if you would like to confirm our current tax-exempt status
            before giving.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Use of Donations
          </h2>
          <p>Donations support our mission to end child exploitation by:</p>
          <ul>
            <li>Keeping children who have been trafficked and/or underprivileged in school</li>
            <li>Providing nutritious meals and basic needs assistance</li>
            <li>Fostering self-sufficiency through after-school initiatives</li>
            <li>Administrative costs necessary to operate our programs</li>
          </ul>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Donation Processing
          </h2>
          <p>
            Donations are processed securely through our third-party payment partners (Donorbox and
            Stripe). You will receive a receipt via email after your donation is processed.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Refund Policy
          </h2>
          <p>
            We generally do not provide refunds for donations. However, if you believe an error has
            occurred, please contact us within 30 days of your donation.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Privacy
          </h2>
          <p>
            Donor information is kept confidential and will not be shared with third parties except
            as required by law.
          </p>

          <h2 className="font-[var(--font-faustina)] text-[32px] leading-[40px] mt-8 mb-4">
            Contact Us
          </h2>
          <p>For questions about donations or this policy, please contact us at:</p>
          <p>
            Email:{' '}
            <a href="mailto:nu4c2020@gmail.com" className="text-primary hover:underline">
              nu4c2020@gmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
