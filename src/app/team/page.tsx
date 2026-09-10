import type { Metadata } from 'next'
import { siteUrl } from '@/lib/site.config'
import TheFreeForCharityTeam from '@/components/home-page/TheFreeForCharityTeam'

export const metadata: Metadata = {
  title: 'Team',
  description: 'Meet the team behind Nurses United 4 Children.',
  alternates: { canonical: siteUrl('/team') },
}

export default function Team() {
  return (
    <main id="main-content">
      <TheFreeForCharityTeam />
    </main>
  )
}
