import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { JobProvider } from "./context/JobContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <JobProvider>
      <App />
    </JobProvider>
  </BrowserRouter>
)