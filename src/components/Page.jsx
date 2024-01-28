import React from 'react';
import { Watermark } from 'antd';
import DetailsS from './store-mobx/DetailsS';// import BussinessNewDetails from './admin/BussinessNewDetails';
const Page = () => (
  <Watermark content={DetailsS.detailsEdit.name}>
    <div style={{  height: '50vw' ,margin:'auto',right: '6vw',left: '6vw',color:'black'}} />
  </Watermark>
);

export default Page;