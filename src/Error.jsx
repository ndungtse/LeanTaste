import React from 'react'
// import logErrorToMyService 

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false , error: null};
    }
  
    static getDerivedStateFromError(error) {
        console.log(error.ReferenceError);
      // Update state so the next render will show the fallback UI.
      return { hasError: true , error: error};
    }
  
    // componentDidCatch(error, errorInfo) {
    //   // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
    // }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong. </h1>;
      }
  
      return this.props.children; 
    }
  }