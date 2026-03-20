import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('[ErrorBoundary] Caught error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback
      return (
        <div className="min-h-screen bg-background flex items-center justify-center px-6">
          <div className="max-w-md text-center space-y-6">
            <div className="font-headline font-black text-8xl text-primary rotate-[-3deg]">OOPS.</div>
            <h1 className="font-headline font-black text-3xl text-on-surface">Something crashed.</h1>
            <p className="font-body text-on-surface-variant">
              {this.state.error?.message ?? 'An unexpected error occurred.'}
            </p>
            <button
              className="bg-primary text-on-primary px-8 py-3 rounded-xl font-headline font-bold uppercase tracking-wide hover:bg-primary-dim transition-colors"
              onClick={() => this.setState({ hasError: false, error: null })}
            >
              Try Again
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
