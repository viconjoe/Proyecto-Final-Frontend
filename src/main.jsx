import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Pages/Login/Login'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import router from './Routes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
