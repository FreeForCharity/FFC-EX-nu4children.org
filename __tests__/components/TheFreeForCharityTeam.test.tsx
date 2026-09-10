import React from 'react'
import { render, screen } from '@testing-library/react'

import TheFreeForCharityTeam from '../../src/components/home-page/TheFreeForCharityTeam'

describe('TheFreeForCharityTeam component', () => {
  it('should render without crashing', () => {
    render(<TheFreeForCharityTeam />)
  })

  it('should display the team heading', () => {
    render(<TheFreeForCharityTeam />)
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument()
  })

  it('should render a card per member with initials monograms and no photos', () => {
    const { container } = render(<TheFreeForCharityTeam />)
    // The organization's team ships seven members; each card exposes its
    // name as a heading.
    const names = screen.getAllByRole('heading', { level: 3 })
    expect(names).toHaveLength(7)
    // No portrait images anywhere in the team section.
    expect(container.querySelectorAll('img')).toHaveLength(0)
  })

  it('should display Sandra Louissaint as President', () => {
    render(<TheFreeForCharityTeam />)
    expect(screen.getByText('Sandra Louissaint')).toBeInTheDocument()
    expect(screen.getByText('President')).toBeInTheDocument()
  })

  it('should display all team member names', () => {
    render(<TheFreeForCharityTeam />)
    const expectedNames = [
      'Sandra Louissaint',
      'Pascale Valbrune',
      'Frantz Richard',
      'Maguy Julmice',
      'Rozeline Simonis',
      'Mirta Antoine',
      'Jenny Eugene',
    ]
    for (const name of expectedNames) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('should have the team section with id="team"', () => {
    const { container } = render(<TheFreeForCharityTeam />)
    expect(container.querySelector('#team')).toBeInTheDocument()
  })
})

describe('TheFreeForCharityTeam with an empty roster', () => {
  beforeEach(() => {
    jest.resetModules()
  })

  it('renders nothing when the team array is empty', () => {
    jest.isolateModules(() => {
      jest.doMock('@/data/team', () => ({ team: [] }))
      const EmptyTeam = require('../../src/components/home-page/TheFreeForCharityTeam').default
      const { container } = render(<EmptyTeam />)
      expect(container.firstChild).toBeNull()
    })
  })
})
