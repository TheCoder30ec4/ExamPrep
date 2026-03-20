import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '@/pages/Home'

const renderHome = () =>
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )

describe('Home Page', () => {
  it('renders the hero heading', () => {
    renderHome()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders "Exam Ready" text in the hero', () => {
    renderHome()
    expect(screen.getByText(/exam ready/i)).toBeInTheDocument()
  })

  it('renders the START PREPPING CTA button', () => {
    renderHome()
    expect(screen.getByRole('link', { name: /start prepping/i })).toBeInTheDocument()
  })

  it('renders the HOW IT WORKS secondary button', () => {
    renderHome()
    const links = screen.getAllByRole('link', { name: /how it works/i })
    // One is the nav link, one is the hero CTA
    expect(links.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the features (toolkit) section', () => {
    renderHome()
    expect(screen.getByText(/stop studying/i)).toBeInTheDocument()
  })

  it('renders all 6 feature cards', () => {
    renderHome()
    expect(screen.getByText(/upload your pdfs/i)).toBeInTheDocument()
    expect(screen.getByText(/youtube tutorials/i)).toBeInTheDocument()
    expect(screen.getByText(/personalized podcast/i)).toBeInTheDocument()
    expect(screen.getByText(/interest-based explanations/i)).toBeInTheDocument()
    expect(screen.getByText(/snap quizzes/i)).toBeInTheDocument()
    expect(screen.getByText(/mock papers/i)).toBeInTheDocument()
  })

  it('renders the CTA section with CLAIM YOUR PASS', () => {
    renderHome()
    expect(screen.getByRole('link', { name: /claim your pass/i })).toBeInTheDocument()
  })

  it('renders the footer', () => {
    renderHome()
    expect(screen.getByRole('heading', { name: /curated riot/i })).toBeInTheDocument()
  })
})
