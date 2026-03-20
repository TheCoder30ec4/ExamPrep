import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '@/components/Navbar'

const renderNavbar = (activePage?: Parameters<typeof Navbar>[0]['activePage']) =>
  render(
    <MemoryRouter>
      <Navbar activePage={activePage} />
    </MemoryRouter>
  )

describe('Navbar', () => {
  it('renders the ExamPrep logo', () => {
    renderNavbar()
    expect(screen.getByText('ExamPrep')).toBeInTheDocument()
  })

  it('renders all nav links', () => {
    renderNavbar()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByText(/features/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /how it works/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /pricing/i })).toBeInTheDocument()
  })

  it('renders Get Started Free button', () => {
    renderNavbar()
    expect(screen.getByRole('link', { name: /get started free/i })).toBeInTheDocument()
  })

  it('applies active style to home when activePage="home"', () => {
    renderNavbar('home')
    const homeLink = screen.getByRole('link', { name: /home/i })
    expect(homeLink.className).toMatch(/text-fuchsia-700/)
  })

  it('applies active style to pricing when activePage="pricing"', () => {
    renderNavbar('pricing')
    const pricingEl = screen.getByText(/pricing/i)
    expect(pricingEl.className).toMatch(/text-fuchsia-700/)
  })

  it('links navigate to correct hrefs', () => {
    renderNavbar()
    const howItWorksLink = screen.getByRole('link', { name: /how it works/i })
    expect(howItWorksLink.getAttribute('href')).toBe('/how-it-works')

    const pricingLink = screen.getByRole('link', { name: /pricing/i })
    expect(pricingLink.getAttribute('href')).toBe('/pricing')
  })
})
