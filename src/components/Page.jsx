import React from 'react';
import { Watermark } from 'antd';
import DetailsS from './store-mobx/DetailsS';// import BussinessNewDetails from './admin/BussinessNewDetails';
const Page = () => (
  <Watermark content={DetailsS.detailsEdit.name}>
    <div style={{ height: '7vw' ,margin:'auto',right: '6vw',left: '6vw'}} />
  </Watermark>
);

export default Page;