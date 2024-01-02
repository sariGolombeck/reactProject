
// import { useState } from "react"
// import AppStore from "./store-mobx/AppStore"
// import { observer } from "mobx-react"
// import BusinessDetails from "./BussinessDetail"
// import Service2 from "./PlusButton"
// import ServicesList from "./Services/ServicesList"
// import MenuToAdmin from "./admin/MenuToAdmin"
// import Form3 from "./Appoinments/FormSendAppointment"
// // import AdminAppoinment from "./admin/AdminAppoinments"
// // import CardsMeeting from "./CardsMeeting"
// import BasicFilterDemo from "./Appoinments/GetAppointmentData"
// import AppointmentData from "./Appoinments/GetAppointmentData"
// import Cards from "./Services/Cards"
// import Edit from "./Edit"
// import Page from "./Page"
// import Login from "./Login"
// // import BussinessNewDetails from "./admin/BussinessNewDetails"
// import { Tabs } from "@mui/material"
// import IconTabs from "./Tabs"
// import Home from "./admin/BussinessNewDetails"
// import Details2 from "./Details2"
// // import Home from "./admin/BussinessNewDetails"
// // import AppointmentData from "./AppointmentData"
// // import IconTabs from "./Tabs"
// const BusinessData = (observer(() => {
//     // const [editForm, setEditForm] = useState(false)
//     return (
//         <>
// {/* <Home/> */}
// <Page/>
// <Details2/>
// {AppStore.isLogin && <Edit/>}        

//             {AppStore.isLogin && <MenuToAdmin/>}        
//             {!AppStore.isLogin && <ServicesList/>}        
//         </>
//     )
// }))
// export default BusinessData
import * as React from 'react';
import { observer } from 'mobx-react';
import Page from '../Page';
import Details2 from '../Details/Details2';
import Edit from '../admin/Edit';
import AppStore from '../store-mobx/AppStore';
import './BussinessData.css';
import Swal from 'sweetalert2'
import ServicesList from '../Services/ServicesList';
import MenuToAdmin from '../admin/MenuToAdmin';
import Login from '../Login';
import { Button } from 'antd';
import Admin from '../admin/Admin';
import ToLogin from './ToLogin';
const BusinessData = observer(() => {
    
    
  return (
    <>

      <Page />{AppStore.isLogin && <Edit />}

      <Details2 />
      {!AppStore.isLogin && <ServicesList />}      {AppStore.isLogin && <MenuToAdmin />}
      {!AppStore.isLogin && <ToLogin/>}  
      {/* <Button
        type="primary"
        onClick={Admin}
        // style={buttonStyle}
        className="top-right-button"
      >LogIN</Button> */}
    </>
  );
});
export default BusinessData;
