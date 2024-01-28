
import '../../body.css'
import * as React from 'react';
import { observer } from 'mobx-react';
import Page from '../Page';
import Details2 from '../Details/Details2';
import Edit from '../admin/Edit';
import AppStore from '../store-mobx/Services';
import './BussinessData.css';
import Swal from 'sweetalert2'
import ServicesList from '../Services/ServicesList';
import MenuToAdmin from '../admin/MenuToAdmin';

import ToLogin from './ToLogin';
const BusinessData = observer(() => {
    
  const sf=(()=>{
    Swal.fire({
      title: "what are your bussiness detail??",
      text: "run to update now!!",
      icon: "question"
    });
    })
  return (
    <>
      <Page />{AppStore.isLogin && <Edit />}
  {!AppStore.isLogin && <ToLogin/>}  
      <Details2 />
      {!AppStore.isLogin && <ServicesList />}      {AppStore.isLogin && <MenuToAdmin />}
      {AppStore.isLogin &&sf()}
    </>
  );
});
export default BusinessData;
