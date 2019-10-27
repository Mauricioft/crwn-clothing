import React, { Component } from 'react'
import { ErrorHandlerDanger } from '../../components/error-handler-danger/index.jsx'

class HandlerError extends Component {
  state = {
    hasError: false,
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }
  componentDidCatch(error, info) {
    console.log('componentDidCatch@error', error)
    console.log('componentDidCatch@info', info)
  }
  render(){
    const { hasError } = this.state
    const { children } = this.props
    return (
      hasError ? (
        <ErrorHandlerDanger />
      ):(
        children
      )
    )
  }
}

export default HandlerError