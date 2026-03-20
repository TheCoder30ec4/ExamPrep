import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

describe('Card', () => {
  it('renders correctly', () => {
    render(<Card data-testid="card">Content</Card>)
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Card data-testid="card" className="custom-class">Card</Card>)
    expect(screen.getByTestId('card').className).toMatch(/custom-class/)
  })
})

describe('CardHeader', () => {
  it('renders children', () => {
    render(<CardHeader>Header</CardHeader>)
    expect(screen.getByText('Header')).toBeInTheDocument()
  })
})

describe('CardTitle', () => {
  it('renders as h3', () => {
    render(<CardTitle>Title</CardTitle>)
    const el = screen.getByText('Title')
    expect(el.tagName).toBe('H3')
  })
})

describe('CardDescription', () => {
  it('renders description text', () => {
    render(<CardDescription>A description</CardDescription>)
    expect(screen.getByText('A description')).toBeInTheDocument()
  })
})

describe('CardContent', () => {
  it('renders content', () => {
    render(<CardContent>Main content</CardContent>)
    expect(screen.getByText('Main content')).toBeInTheDocument()
  })
})

describe('CardFooter', () => {
  it('renders footer', () => {
    render(<CardFooter>Footer</CardFooter>)
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})
