import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProvider } from './components/contexts/AppContext'
// import ErrorBoundary from './Error';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
      <AppProvider>
        <App />
      </AppProvider>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
)
