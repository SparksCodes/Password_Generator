import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PasswordProvider } from './Providers/passwordContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PasswordProvider>
      <App />
    </PasswordProvider>
  </React.StrictMode>
)
