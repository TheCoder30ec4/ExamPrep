import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Pricing from '@/pages/Pricing'

const renderPricing = () =>
  render(
    <MemoryRouter>
      <Pricing />
    </MemoryRouter>
  )

describe('Pricing Page', () => {
  it('renders the pricing hero heading', () => {
    renderPricing()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders CHOOSE YOUR PASS headline', () => {
    renderPricing()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/choose your/i)
    expect(heading.textContent).toMatch(/pass/i)
  })

  it('renders FREE SCHOLAR tier', () => {
    renderPricing()
    expect(screen.getByText(/free scholar/i)).toBeInTheDocument()
    expect(screen.getByText(/\$0/i)).toBeInTheDocument()
  })

  it('renders PRO SCHOLAR tier with price', () => {
    renderPricing()
    expect(screen.getByText(/pro scholar/i)).toBeInTheDocument()
    expect(screen.getByText(/\$9\.99/i)).toBeInTheDocument()
  })

  it('renders LEGENDARY SCHOLAR tier with price', () => {
    renderPricing()
    expect(screen.getByText(/legendary scholar/i)).toBeInTheDocument()
    expect(screen.getByText(/\$19\.99/i)).toBeInTheDocument()
  })

  it('renders CTA buttons for each tier', () => {
    renderPricing()
    expect(screen.getByRole('link', { name: /stay free/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /get pro/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /go legendary/i })).toBeInTheDocument()
  })

  it('renders MOST HYPED tag on the featured card', () => {
    renderPricing()
    expect(screen.getByText(/most hyped/i)).toBeInTheDocument()
  })

  it('renders the FAQ section', () => {
    renderPricing()
    expect(screen.getByText(/no cap, just value/i)).toBeInTheDocument()
    expect(screen.getByText(/can i cancel\?/i)).toBeInTheDocument()
    expect(screen.getByText(/student discount\?/i)).toBeInTheDocument()
  })
})
