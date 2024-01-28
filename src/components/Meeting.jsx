
import '../../body.css'

import React from 'react'
 import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Admin from './components/admin/Admin.jsx'
import './index.css'
// const Meeting=()=>{

// }







import React, { useState } from 'react';
import { Modal, Button, Cascader, DatePicker, Form, Input, InputNumber, Radio, Select, Switch, TreeSelect } from 'antd';

const Meeting = () => {
  const [formDetails,setFormDetails]=useState(
   servicesName='',
   servicesDescription='',
   servicePrice=0,
   dateTime=Date.now(),
   clientName='',
   clientPhone='',
   clientEmail=''
  )

  
  return (
    <>
   
    </>
  );
}

export  default  Meeting;