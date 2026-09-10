import type { Metadata } from 'next'
import Link from 'next/link'
import { siteUrl } from '@/lib/site.config'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'Volunteer',
  description:
    'Volunteer with Nurses United 4 Children and help support children in our community.',
  alternates: { canonical: siteUrl('/volunteer') },
}

export default function Volunteer() {
  return (
    <main id="main-content" className="pt-[130px] pb-[70px]">
      <div className="ffc-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-[400] text-[40px] lg:text-[48px] mb-4" id="faustina-font">
              Volunteer
            </h1>
            <h2 className="text-[22px] font-[700] mb-4 lato-font">
              Supporting Access and Empowering Tomorrow&apos;s Leaders
            </h2>
            <p className="text-[16px] leading-[26px] mb-8 lato-font">
              We provide opportunities for individuals to get involved in our cause. Anyone who
              feels compelled to help can donate their time and skills to the organization. Contact
              us to learn more about our commitment to uplift and support children within our
              communities and elsewhere.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="inline-block rounded px-8 py-3 text-white text-[16px] font-[600] lato-font"
                style={{ backgroundColor: '#ff2525' }}
              >
                Donate Now
              </Link>
              <Link
                href="/contact-us"
                className="inline-block rounded px-8 py-3 border-2 border-[#ff2525] text-[#ff2525] text-[16px] font-[600] lato-font"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <img
            src={assetPath('/Images/nu4children/volunteer.jpeg')}
            alt="Nurses United 4 Children volunteers"
            className="w-full h-auto rounded-xl shadow"
          />
        </div>
      </div>
    </main>
  )
}
