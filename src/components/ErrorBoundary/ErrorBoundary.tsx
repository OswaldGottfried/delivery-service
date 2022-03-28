import React, { ErrorInfo } from 'react'

type State = {
  errorMessage: string
  hasError: boolean
}

export class ErrorBoundary extends React.Component<unknown, State> {
  constructor(props: unknown) {
    super(props)
    this.state = { errorMessage: '', hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, errorMessage: error.message }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorMessage: error.message })
  }

  render() {
    if (this.state.hasError) {
      return <p>{this.state.errorMessage}</p>
    }

    return this.props.children
  }
}
