// // // // import * as React from 'react';
// // // // import Button from '@mui/material/Button';
// // // // // import SendIcon from '@mui/icons-material/Send';
// // // // import { useState, useEffect } from "react";
// // // // import { observer } from "mobx-react";
// // // // import DetailsS from "./store-mobx/DetailsS";
// // // // const Details2 = (observer((props) => {
// // // //     const [isEdit, setisEdit] = useState(false)
   
// // // //     useEffect(() => {
// // // //         DetailsS.initialbusinessServices()
// // // //     }, []);
// // // //     return (
// // // //         <>
// // // //             <img src={DetailsS.detailsEdit.logo} id="logo" />
// // // //             <div id="mydiv">
// // // //             <h2 className="details"> {DetailsS.detailsEdit.name} </h2>

// // // //                 <div className="details">our addrass: {DetailsS.detailsEdit.address}</div>
// // // //                 <div className="details"> bussiness phone: {DetailsS.detailsEdit.phone}</div>
// // // //                 <div className="details">owner: {DetailsS.detailsEdit.owner}</div>
// // // //                 <div className="details"> description: {DetailsS.detailsEdit.description}</div>
// // // //             </div>
// // // //         </>
// // // //     )
// // // // }))
// // // // export default Details2
// // // import * as React from 'react';
// // // import Button from '@mui/material/Button';
// // // import { useState, useEffect } from "react";
// // // import { observer } from "mobx-react";
// // // import DetailsS from "./store-mobx/DetailsS";

// // // // Import icons from MUI
// // // import { FaMapMarkerAlt, FaPhone, FaUser, FaInfoCircle } from 'react-icons/fa';

// // // const Details2 = observer((props) => {
// // //   const [isEdit, setisEdit] = useState(false);

// // //   useEffect(() => {
// // //     DetailsS.initialbusinessServices();
// // //   }, []);

// // //   return (
// // //     <div className="card">
// // //       {/* <img src={DetailsS.detailsEdit.logo} id="logo" alt="Logo" /> */}
// // //       <div className="card-content">
// // //         <h2 className="details">{DetailsS.detailsEdit.name}</h2>
// // //         <div className="details">
// // //           <FaMapMarkerAlt className="icon" />
// // //           <span>{DetailsS.detailsEdit.address}</span>
// // //         </div>
// // //         <div className="details">
// // //           <FaPhone className="icon" />
// // //           <span>{DetailsS.detailsEdit.phone}</span>
// // //         </div>
// // //         <div className="details">
// // //           <FaUser className="icon" />
// // //           <span>{DetailsS.detailsEdit.owner}</span>
// // //         </div>
// // //         <div className="details">
// // //           <FaInfoCircle className="icon" />
// // //           <span>{DetailsS.detailsEdit.description}</span>
// // //         </div>
// // //       </div>
// // //       <Button variant="contained" className="edit-button">
// // //         Edit
// // //       </Button>
// // //     </div>
// // //   )
// // // });

// // // export default Details2;
// // import * as React from 'react';
// // import Button from '@mui/material/Button';
// // import { useState, useEffect } from 'react';
// // import { observer } from 'mobx-react';
// // import DetailsS from './store-mobx/DetailsS';
// // import { EnvironmentOutlined, PhoneOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';

// // const Details2 = observer((props) => {
// //   const [isEdit, setisEdit] = useState(false);

// //   useEffect(() => {
// //     DetailsS.initialbusinessServices();
// //   }, []);

// //   return (
// //     <div className="card">
// //       <img src={DetailsS.detailsEdit.logo} id="logo" alt="Logo" />
// //       <div className="card-content">
// //         <h2 className="details">{DetailsS.detailsEdit.name}</h2>
// //         <div className="details">
// //           <EnvironmentOutlined className="icon" />
// //           <span>{DetailsS.detailsEdit.address}</span>
// //         </div>
// //         <div className="details">
// //           <PhoneOutlined className="icon" />
// //           <span>{DetailsS.detailsEdit.phone}</span>
// //         </div>
// //         <div className="details">
// //           <UserOutlined className="icon" />
// //           <span>{DetailsS.detailsEdit.owner}</span>
// //         </div>
// //         <div className="details">
// //           <InfoCircleOutlined className="icon" />
// //           <span>{DetailsS.detailsEdit.description}</span>
// //         </div>
// //       </div>
// //       <Button variant="contained" className="edit-button">
// //         Edit
// //       </Button>
// //     </div>
// //   );
// // });

// // export default Details2;
// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { useState, useEffect } from 'react';
// import { observer } from 'mobx-react';
// import DetailsS from './store-mobx/DetailsS';
// import { EnvironmentOutlined, PhoneOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
// import './Details2.css';

// const Details2 = observer((props) => {
//   const [isEdit, setisEdit] = useState(false);

//   useEffect(() => {
//     DetailsS.initialbusinessServices();
//   }, []);

//   return (
//     <div className="card-container">
//       <div className="card">
//         <img src={DetailsS.detailsEdit.logo} id="logo" alt="Logo" />
//         <div className="card-content">
//           <h2 className="details">{DetailsS.detailsEdit.name}</h2>
//           <div className="details">
//             <EnvironmentOutlined className="icon" />
//             <span>{DetailsS.detailsEdit.address}</span>
//           </div>
//           <div className="details">
//             <PhoneOutlined className="icon" />
//             <span>{DetailsS.detailsEdit.phone}</span>
//           </div>
//           <div className="details">
//             <UserOutlined className="icon" />
//             <span>{DetailsS.detailsEdit.owner}</span>
//           </div>
//           <div className="details">
//             <InfoCircleOutlined className="icon" />
//             <span>{DetailsS.detailsEdit.description}</span>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   );
// });

// export default Details2;
import '../../body.css'

import scrollElement from 'react-scroll/modules/mixins/scroll-element';
import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { EnvironmentOutlined, PhoneOutlined, UserOutlined, InfoCircleOutlined } from '@ant-design/icons';
import './Details2.css';
import DetailsS from '../store-mobx/DetailsS';

const Details2 = observer((props) => {
  const [isEdit, setisEdit] = useState(false);

  useEffect(() => {
    DetailsS.initialbusinessServices();
  }, []);

  return (
    <div className="card-container">
      <div className="card">
      <img id='logo' src={DetailsS.detailsEdit.logo}></img>
        <div className="card-content">
          <h2 className="details">{DetailsS.detailsEdit.name}</h2>
          <div className="details">
            <EnvironmentOutlined className="icon" />
            <span>{DetailsS.detailsEdit.address}</span>
          </div>
          <div className="details">
            <PhoneOutlined className="icon" />
            <span>{DetailsS.detailsEdit.phone}</span>
          </div>
          <div className="details">
            <UserOutlined className="icon" />
            <span>{DetailsS.detailsEdit.owner}</span>
          </div>
          <div className="details">
            <InfoCircleOutlined className="icon" />
            <span>{DetailsS.detailsEdit.description}</span>
          </div>
        </div>
        
      </div>
    </div>
  );
});

export default Details2;