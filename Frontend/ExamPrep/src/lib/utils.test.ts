import { describe, it, expect } from 'vitest'
import { cn } from '@/lib/utils'

describe('cn()', () => {
  it('returns a single class', () => {
    expect(cn('text-red-500')).toBe('text-red-500')
  })

  it('merges multiple classes', () => {
    expect(cn('px-4', 'py-2')).toBe('px-4 py-2')
  })

  it('overrides conflicting Tailwind classes', () => {
    // tailwind-merge should keep the last one
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
  })

  it('ignores falsy values', () => {
    expect(cn('px-4', false && 'py-2', null, undefined, 'mt-2')).toBe('px-4 mt-2')
  })

  it('handles conditional classes via clsx object syntax', () => {
    expect(cn({ 'font-bold': true, italic: false })).toBe('font-bold')
  })
})
