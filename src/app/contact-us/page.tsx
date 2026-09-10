import type { Metadata } from 'next'
import { siteUrl, siteConfig } from '@/lib/site.config'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Nurses United 4 Children.',
  alternates: { canonical: siteUrl('/contact-us') },
}

export default function ContactUs() {
  return (
    <main id="main-content" className="pt-[130px] pb-[70px]">
      <div className="ffc-container max-w-[700px] mx-auto text-center">
        <h1 className="font-[400] text-[40px] lg:text-[48px] mb-4" id="faustina-font">
          Contact Us
        </h1>
        <h2 className="text-[20px] font-[700] mb-6 lato-font">
          Need any Consultations? Contact With Us
        </h2>
        <p className="text-[16px] leading-[26px] mb-10 lato-font">
          We value your interest in supporting Nurses United and making a positive impact on the
          lives of vulnerable children. If you have any questions, want to learn more about our
          initiatives, or are eager to get involved, please don&apos;t hesitate to reach out.
        </p>

        <div className="ffc-card p-8 inline-block text-left">
          <p className="text-[16px] leading-[26px] mb-2 lato-font">
            <strong>Nurses United 4 Children Inc</strong>
            <br />
            Fort Lauderdale, FL
          </p>
          <p className="text-[16px] leading-[26px] lato-font">
            Email:{' '}
            <a href={`mailto:${siteConfig.contactEmail}`} className="underline font-[600]">
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>

        {/*
          The live source site's contact form (a JS form plugin) has no
          backend once this site is static — WP contact forms cannot
          function on GitHub Pages. Per the migration runbook, it is
          replaced with a direct mailto: link rather than shipped as a
          silently-broken form.
        */}
        <p className="mt-10 text-[15px] lato-font">
          Prefer email? Just send us a note at{' '}
          <a href={`mailto:${siteConfig.contactEmail}`} className="underline font-[600]">
            {siteConfig.contactEmail}
          </a>{' '}
          and we&apos;ll get back to you.
        </p>
      </div>
    </main>
  )
}
