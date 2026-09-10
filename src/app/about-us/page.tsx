import type { Metadata } from 'next'
import { siteUrl } from '@/lib/site.config'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "Learn about Nurses United 4 Children's mission to end child exploitation and keep vulnerable children safe, fed, and in school.",
  alternates: { canonical: siteUrl('/about-us') },
}

export default function AboutUs() {
  return (
    <main id="main-content" className="pt-[130px] pb-[70px]">
      <div className="ffc-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-[60px]">
          <div>
            <h1 className="font-[400] text-[40px] lg:text-[48px] mb-6" id="faustina-font">
              About Us
            </h1>
            <h2 className="text-[22px] font-[700] mb-4 lato-font">Who We Are</h2>
            <p className="text-[16px] leading-[26px] mb-4 lato-font">
              Nurses United is a non-profit born after Cayes, Haiti, a poverty-stricken town where
              children are traded for goods and favors. Disturbed by this, our parent-members took
              action. We now strive to end child exploitation by keeping children in the US and the
              Caribbean, who have been human trafficked and/or are underprivileged in school,
              offering nutritious meals, and fostering self-sufficiency through after-school
              initiatives. We fund diverse children&apos;s needs, embodying our mission for a
              brighter future.
            </p>
          </div>
          <img
            src={assetPath('/Images/nu4children/about.jpg')}
            alt="Nurses United 4 Children volunteers"
            className="w-full h-auto rounded-xl shadow"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="ffc-card p-8">
            <h2 className="text-[26px] font-[700] mb-3 lato-font">Our Mission</h2>
            <p className="text-[16px] leading-[26px] lato-font">
              Nurses United 4 Children: Ensuring every child&apos;s safety, health, and happiness.
            </p>
          </div>
          <div className="ffc-card p-8">
            <h2 className="text-[26px] font-[700] mb-3 lato-font">Our Vision</h2>
            <p className="text-[16px] leading-[26px] lato-font">
              A world where no child is exploited, and every child has access to quality education,
              nutritious meals, and healthcare. Nurses United envisions communities transformed by
              empathy and empowerment, where the collective efforts of individuals, donors, and
              volunteers create lasting change for generations to come.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
