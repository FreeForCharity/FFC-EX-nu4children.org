import type { Metadata } from 'next'
import { siteUrl } from '@/lib/site.config'
import { assetPath } from '@/lib/assetPath'

export const metadata: Metadata = {
  title: 'Gala',
  description: "Nurses United 4 Children's annual charity gala.",
  alternates: { canonical: siteUrl('/event') },
}

const galaPhotos = [
  { file: 'gala-1.jpg', alt: 'Guests at the Nurses United 4 Children charity gala' },
  { file: 'gala-2.jpg', alt: 'Nurses United 4 Children charity gala event' },
  { file: 'gala-3.jpg', alt: 'Nurses United 4 Children charity gala celebration' },
]

export default function Gala() {
  return (
    <main id="main-content" className="pt-[130px] pb-[70px]">
      <div className="ffc-container max-w-[900px] mx-auto">
        <h1 className="font-[400] text-[40px] lg:text-[48px] mb-6" id="faustina-font">
          Gala
        </h1>
        <p className="text-[16px] leading-[26px] mb-4 lato-font">
          Our very first charity gala was held on February 10, 2024, at the Event Center in Margate,
          FL. Tickets were $125 for a single or $200 per couple, with dinner included and
          entertainment by Baz Konpa and DJ Bugs. Attire was black tie.
        </p>
        <p className="text-[16px] leading-[26px] mb-10 lato-font">
          On February 10th, 2024, Nurses United 4 Children had a lot to celebrate. Many came out to
          support the organization, allowing us to help over 250 children living in the US and the
          Caribbean. Many of these children are living in poverty and some are victims of human
          trafficking. Throughout the COVID pandemic, the organization continued to function and
          support the needs of these kids. We were able to reach our monetary goal for this event,
          though we are in need of continued support. Counting down the days to the next Gala!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galaPhotos.map((photo) => (
            <img
              key={photo.file}
              src={assetPath(`/Images/nu4children/${photo.file}`)}
              alt={photo.alt}
              className="w-full h-auto rounded-xl shadow"
            />
          ))}
        </div>
      </div>
    </main>
  )
}
