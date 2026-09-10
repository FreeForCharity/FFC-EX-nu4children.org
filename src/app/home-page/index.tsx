import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'
import { siteConfig } from '@/lib/site.config'

const offerings = [
  {
    number: '1',
    title: 'Services',
    body: 'Nurses United 4 Children prioritizes child well-being, proactively addressing issues that endanger innocence. We are committed to aiding kids and families through nourishment, education, and life skills, ensuring desperation never risks lives.',
    linkLabel: 'Contact Us',
    href: '/contact-us',
  },
  {
    number: '2',
    title: 'Volunteering',
    body: 'We provide opportunities for individuals to get involved in our cause. Anyone who feels compelled to help can donate their time and skills to the organization.',
    linkLabel: 'See Detail',
    href: '/volunteer',
  },
  {
    number: '3',
    title: 'Partnership',
    body: "Empowered by regular needs assessments, we tailor solutions to communities' exact needs. Sponsors form our bedrock. If you're driven by change, reach out today. Your action, their future!",
    linkLabel: 'Get Quote',
    href: '/contact-us',
  },
]

const HomePage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-[130px] pb-[70px] bg-[#fdf4f2]">
        <div className="ffc-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1
              className="font-[400] text-[40px] lg:text-[56px] leading-[1.1] mb-6"
              id="faustina-font"
            >
              Ending Child Exploitation, Building Brighter Futures
            </h1>
            <p className="text-[18px] leading-[28px] mb-8 lato-font">{siteConfig.description}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="inline-block rounded px-8 py-3 text-white text-[16px] font-[600] lato-font"
                style={{ backgroundColor: '#ff2525' }}
              >
                Donate Now
              </Link>
              <Link
                href="/about-us"
                className="inline-block rounded px-8 py-3 border-2 border-[#ff2525] text-[#ff2525] text-[16px] font-[600] lato-font"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <img
              src={assetPath('/Images/nu4children/hero.jpeg')}
              alt="Nurses United 4 Children volunteers with children in the community"
              className="w-full h-auto rounded-xl shadow-lg"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="ffc-container py-[70px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img
            src={assetPath('/Images/nu4children/about.jpg')}
            alt="Nurses United 4 Children volunteers"
            className="w-full h-auto rounded-xl shadow"
          />
          <div>
            <h2 className="font-[400] text-[32px] lg:text-[40px] mb-4" id="faustina-font">
              About Us
            </h2>
            <p className="text-[16px] leading-[26px] mb-6 lato-font">
              Nurses United 4 Children is a non-profit organization born after Cayes, Haiti, a
              poverty-stricken town where children are traded for goods and favors. Disturbed by
              this, our parent-members took action. We now strive to end child exploitation by
              keeping children who have been human trafficked and/or are underprivileged in schools,
              by offering assistance with nutritious meals, and by fostering self-sufficiency
              through after-school initiatives.
            </p>
            <Link href="/about-us" className="font-[600] underline lato-font">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-[#f9f9f9] py-[70px]">
        <div className="ffc-container">
          <h2 className="font-[400] text-[32px] lg:text-[40px] text-center mb-2" id="faustina-font">
            What We Offer
          </h2>
          <p className="text-center text-[16px] mb-12 lato-font">
            Checkout different range of our services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offerings.map((item) => (
              <div key={item.title} className="ffc-card p-8 flex flex-col">
                <span className="text-[14px] font-[700] text-[#ff2525] mb-2 lato-font">
                  {item.number}
                </span>
                <h3 className="text-[22px] font-[700] mb-3 lato-font">{item.title}</h3>
                <p className="text-[15px] leading-[24px] mb-6 flex-1 lato-font">{item.body}</p>
                <Link href={item.href} className="font-[600] underline lato-font">
                  {item.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="ffc-container py-[70px] text-center">
        <h2 className="font-[400] text-[32px] lg:text-[40px] mb-4" id="faustina-font">
          Why should you join Nurses United 4 Children?
        </h2>
        <p className="max-w-[720px] mx-auto text-[16px] leading-[26px] mb-2 lato-font">
          Simply because we deeply care for children. We want to create a difference in the lives of
          all children. We want to keep children in school and help them become who they are meant
          to be. We believe that by saving one child we can save many others now and for many years
          to come.
        </p>
        <p className="text-[16px] font-[700] mb-8 lato-font">
          It&apos;s only $50/6 months or $100/year per member to join.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
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
      </section>

      {/* Mission and Vision */}
      <section className="bg-[#f9f9f9] py-[70px]">
        <div className="ffc-container grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-[26px] font-[700] mb-3 lato-font">Our Mission</h3>
            <p className="text-[16px] leading-[26px] lato-font">
              Nurses United 4 Children: Ensuring every child&apos;s safety, health, and happiness.
            </p>
          </div>
          <div>
            <h3 className="text-[26px] font-[700] mb-3 lato-font">Our Vision</h3>
            <p className="text-[16px] leading-[26px] lato-font">
              A world where no child is exploited, and every child has access to quality education,
              nutrition, and healthcare.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="ffc-container py-[70px] text-center">
        <h2 className="font-[400] text-[32px] lg:text-[40px] mb-4" id="faustina-font">
          Contact Us Today
        </h2>
        <p className="max-w-[720px] mx-auto text-[16px] leading-[26px] mb-8 lato-font">
          We value your interest in supporting Nurses United 4 Children and making a positive impact
          on the lives of vulnerable children. If you have any questions, want to learn more about
          our initiatives, or are eager to get involved, please don&apos;t hesitate to reach out.
        </p>
        <Link
          href="/contact-us"
          className="inline-block rounded px-8 py-3 text-white text-[16px] font-[600] lato-font"
          style={{ backgroundColor: '#ff2525' }}
        >
          Contact Us
        </Link>
      </section>
    </div>
  )
}

export default HomePage
