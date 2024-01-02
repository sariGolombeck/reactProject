
import React from 'react'
 import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Admin from './components/admin/Admin.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import ServicesList from './components/Services/ServicesList.jsx'
import BusinessData from './components/BussinessData/BussinesData.jsx'
import GetAppointmentData from './components/Appoinments/GetAppointmentData.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <BusinessData />,
    errorElement: <div>error app</div>,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <div>error admin</div>,
    children: [
      {
        path: '',
        element: <div>empty</div>,
      },
      {
        path: 'services',
        element: <ServicesList/>,
        errorElement: <div>error services not found</div>
      },
      {
        path: 'meeting',
        element:<GetAppointmentData/>,
        errorElement: <div>error appointment not found</div>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);