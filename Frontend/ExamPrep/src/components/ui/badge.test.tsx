import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from '@/components/ui/badge'

describe('Badge', () => {
  it('renders with default variant', () => {
    render(<Badge>New</Badge>)
    expect(screen.getByText('New')).toBeInTheDocument()
  })

  it('applies secondary variant class', () => {
    render(<Badge variant="secondary" data-testid="badge">PRO</Badge>)
    const badge = screen.getByTestId('badge')
    expect(badge.className).toMatch(/bg-secondary-container/)
  })

  it('applies tertiary variant class', () => {
    render(<Badge variant="tertiary" data-testid="badge">HYPED</Badge>)
    const badge = screen.getByTestId('badge')
    expect(badge.className).toMatch(/bg-tertiary-fixed/)
  })

  it('applies outline variant class', () => {
    render(<Badge variant="outline" data-testid="badge">FREE</Badge>)
    const badge = screen.getByTestId('badge')
    expect(badge.className).toMatch(/border-primary/)
  })

  it('applies custom className', () => {
    render(<Badge className="my-custom" data-testid="badge">Tag</Badge>)
    expect(screen.getByTestId('badge').className).toMatch(/my-custom/)
  })
})
