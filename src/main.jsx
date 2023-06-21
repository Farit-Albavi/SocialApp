import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {PostContextProvider } from './context/PostContext'
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostContextProvider>
      <App />
    </PostContextProvider>
  </React.StrictMode>,
)
