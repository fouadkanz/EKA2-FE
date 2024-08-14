import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Helmet } from 'react-helmet';
const appName = process.env.VITE_APP_NAME || 'EKA2';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
       <Helmet>
      <title>{appName.toUpperCase()}</title>
    </Helmet>
    <App />
  </React.StrictMode>,
)
