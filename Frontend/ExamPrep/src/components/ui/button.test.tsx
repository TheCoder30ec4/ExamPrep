import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('applies outline variant class', () => {
    render(<Button variant="outline">Outline</Button>)
    const btn = screen.getByRole('button', { name: /outline/i })
    expect(btn.className).toMatch(/border-primary/)
  })

  it('applies tertiary variant class', () => {
    render(<Button variant="tertiary">Tertiary</Button>)
    const btn = screen.getByRole('button', { name: /tertiary/i })
    expect(btn.className).toMatch(/bg-tertiary-fixed/)
  })

  it('applies lg size class', () => {
    render(<Button size="lg">Large</Button>)
    const btn = screen.getByRole('button', { name: /large/i })
    expect(btn.className).toMatch(/h-14/)
  })

  it('renders as child element via asChild', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    const link = screen.getByRole('link', { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link.tagName).toBe('A')
  })

  it('is disabled when disabled prop is passed', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
