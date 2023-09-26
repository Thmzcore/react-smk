import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Content from './content'
import './assets/css/App.css'
import './assets/main.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Content />
  </React.StrictMode>,
)
