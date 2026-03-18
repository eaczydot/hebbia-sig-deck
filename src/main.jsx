import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ConferenceProvider } from './conference'
import './styles/variables.css'
import './styles/global.css'
import './styles/utilities.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConferenceProvider>
      <App />
    </ConferenceProvider>
  </React.StrictMode>,
)
