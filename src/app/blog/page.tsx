import type { Metadata } from 'next'
import { siteUrl } from '@/lib/site.config'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'Our Impact',
  description: 'A timeline of Nurses United 4 Children activities and community events.',
  alternates: { canonical: siteUrl('/blog') },
}

// The source site (nu4children.org/blog/) spreads this same timeline across
// four WordPress-paginated URLs (/blog/, /blog/2/, /blog/3/, /blog/4/) via an
// internal <!--nextpage--> split — an artifact of the source page's own
// authoring, not four distinct posts. They are merged into one page here in
// chronological reading order rather than reproduced as four routes.
const activities = [
  {
    date: 'March 2024',
    title: 'School Project in Cayes, Haiti',
    body: 'We have completed our first project for the school of Datan, in Cayes, Haiti. Every school and every area face their own challenges.',
    image: 'activity-1a.jpeg',
    alt: 'Nurses United 4 Children school project in Cayes, Haiti',
  },
  {
    date: 'July 2024',
    title: 'Human Trafficking Speaking Engagement',
    body: 'Nurses United 4 Children attended a Human Trafficking Speaking Engagement on 7/13/2024 with special guest FBI Agent Katina and human trafficking survivor and Executive Director Gloria Martinez. Congratulations to "ECHO" for a successful event.',
    image: 'activity-2a.jpeg',
    alt: 'Nurses United 4 Children at a human trafficking speaking engagement',
  },
  {
    date: 'July 2024',
    title: 'Another Great Event in Miami Beach',
    body: 'Nurses United 4 Children was very pleased to attend a very informative Zoom meeting about labor and human trafficking, presented by Kristi House Children’s Advocacy Center, on July 30th, with Gloria Martinez.',
    image: 'activity-3a.jpeg',
    alt: 'Nurses United 4 Children event in Miami Beach',
  },
  {
    date: 'October 2024 – January 2025',
    title: 'Community Baby Shower, Fundraising Gala, and Toy Drive',
    body: 'A beautiful community baby shower by Tree of Life, attended by Nurses United 4 Children (10/5/2024). On November 16, 2024, we attended a fundraising gala — thank you Club 500 for a beautiful time! On December 22, 2024, we hosted a Toy Drive in collaboration with Kingdom Advantage Church.',
    image: 'activity-4a.jpeg',
    alt: 'Nurses United 4 Children community event',
  },
]

export default function Blog() {
  return (
    <main id="main-content" className="pt-[130px] pb-[70px]">
      <div className="ffc-container max-w-[900px] mx-auto">
        <h1 className="font-[400] text-[40px] lg:text-[48px] mb-10" id="faustina-font">
          Our Impact
        </h1>

        <div className="space-y-16">
          {activities.map((activity) => (
            <article
              key={activity.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <img
                src={assetPath(`/Images/nu4children/${activity.image}`)}
                alt={activity.alt}
                className="w-full h-auto rounded-xl shadow"
              />
              <div>
                <p className="text-[13px] font-[700] text-[#ff2525] mb-2 lato-font">
                  {activity.date}
                </p>
                <h2 className="text-[24px] font-[700] mb-3 lato-font">{activity.title}</h2>
                <p className="text-[16px] leading-[26px] lato-font">{activity.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
