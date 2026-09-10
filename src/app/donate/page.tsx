import type { Metadata } from 'next'
import { siteUrl } from '@/lib/site.config'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support Nurses United 4 Children. Your donation helps keep vulnerable children safe, fed, and in school.',
  alternates: { canonical: siteUrl('/donate') },
}

export default function Donate() {
  return (
    <main id="main-content" className="pt-[130px] pb-[70px]">
      <div className="ffc-container max-w-[800px] mx-auto text-center">
        <h1 className="font-[400] text-[40px] lg:text-[48px] mb-4" id="faustina-font">
          Donate Now
        </h1>
        <p className="text-[20px] font-[700] mb-4 lato-font">
          &quot;You save a life, you save many&quot;
        </p>
        <p className="text-[16px] leading-[26px] mb-8 lato-font">
          Your support can be the beacon of hope in a child&apos;s life. By contributing to Nurses
          United, you are actively participating in the mission to end child exploitation and
          provide a path to a brighter future for vulnerable children. Your donation goes directly
          to initiatives that keep children who have been human trafficked and/or are
          underprivileged in schools, offer assistance with nutritious meals, and foster
          self-sufficiency through after-school activities.
        </p>

        <a
          href="https://buy.stripe.com/3cs0445SQ8GO8LK288"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded px-10 py-3 text-white text-[16px] font-[600] mb-10 lato-font"
          style={{ backgroundColor: '#ff2525' }}
        >
          Donate Now
        </a>

        <div className="mt-4">
          <iframe
            src="https://donorbox.org/nurses-united-4-children-inc-2?utm_medium=qrcode&utm_source=qrcode"
            style={{ border: '0', width: '100%', maxWidth: '100%' }}
            name="donorbox-donation-form"
            scrolling="no"
            height={750}
            title="Donate to Nurses United 4 Children via Donorbox"
            allow="payment"
          />
        </div>
      </div>
    </main>
  )
}
