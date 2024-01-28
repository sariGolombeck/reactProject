// // import React, { useState, useEffect } from "react";
// // import AppStore from "./AppStore";
// // const ServicesList = () => {
// //   const [services, setServices] = useState(AppStore.serviceList);


// //   // useEffect(() => {
// //   //   const responseData = AppStore.serviceList;
// //   //   if (responseData) {
// //   //     setServices(responseData);
// //   //     console.log('Received response data:', responseData.toString());
// //   //   }
// //   // }, [AppStore.serviceList]);
  
// //   useEffect(() => {
// //     setServices(AppStore.serviceList);
// //   }, [AppStore.serviceList]);

// //   return (
// //     <>

// // {services.length>0 ? (
// //   services.map((v, i) => (
// //     <h1 key={i}>
// //       <br />
// //       {v}
// //     </h1>
// //   ))
// // ) : (
// //   <p>No services available</p>
// // )}





  
// //     </>
// //   );
// // };


// // export default ServicesList;




// import React, { useState, useEffect } from "react";
// import AppStore from "./AppStore";
// import { autorun } from 'mobx';

// const ServicesList = () => {
//   const [services, setServices] = useState([AppStore.serviceList]);

//   useEffect(() => {
//     // Initialize the services with the current value from AppStore.serviceList
//     setServices(AppStore.serviceList);

//     // Use autorun to update the state whenever AppStore.serviceList changes
//     autorun(() => {
//       setServices(AppStore.serviceList);
//       console.log('Updated services:', AppStore.serviceList);
//     });
//   }, []);

//   return (
//     <>
//      {services.length>0 ? (
//      <h1>{services}
  
// </h1>

// ) : (
//   <p>No services available</p>
// )}
//     </>
//   );
// };

// export default ServicesList;



// // {serviceList.map((v, i) => (
// //             <h1 key={i}>
// //               <br />
// //               {v}
// //             </h1>
// //           ))}



// // import React, { useState, useEffect } from "react";
// // import { observer } from "mobx-react";
// // import AppStore from "./AppStore";

// // const ServicesList = observer(() => {
// //   const [services, setServices] = useState(AppStore.services);



// //   useEffect(() => {
// //     setServices(AppStore.getServiceList());
// //   }, [AppStore.getServiceList()]);

// //   return (
// //     <>
// //       {services.length > 0 ? (
// //         AppStore.getServiceList().map((v, i) => (
// //           <h1 key={i}>
// //             <br />
// //             {v}
// //           </h1>
// //         ))
// //       ) : (
// //         <p>No services available</p>
// //       )}
// //     </>
// //   );
// // });

// // export default ServicesList;

// // // // import React, { useState, useEffect } from "react";
// // // // import { observer } from "mobx-react";
// // // // import AppStore from "./AppStore";

// // // // const ServicesList = observer(() => {
// // // //   const [services, setServices] = useState(AppStore.getServiceList());

// // // //   useEffect(() => {
// // // //     AppStore.getServiceList();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     setServices(AppStore.getServiceList());
// // // //   }, [AppStore.setServiceList()]);

// // // //   return (
// // // //     <>
// // // //       {AppStore.getServiceList().length > 0 ? (
// // // //        AppStore.getServiceList().map((v, i) => (
// // // //           <h1 key={i}>
// // // //             <br />
// // // //             {v}
// // // //           </h1>
// // // //         ))
// // // //       ) : (
// // // //         <p>No services available</p>
// // // //       )}
// // // //     </>
// // // //   );
// // // // });

// // // // export default ServicesList;

import React, { useState, useEffect } from "react";
import AppStore from "../store-mobx/Services";
import { autorun } from 'mobx';
import Service2 from "./PlusButton";
// import AdminAppoinment from "../admin/AdminAppoinments";
import Cards from "./Cards";
const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Initialize the services with the current value from AppStore.serviceList
    setServices(AppStore.serviceList);

    // Use autorun to update the state whenever AppStore.serviceList changes
    autorun(() => {
      setServices(AppStore.serviceList);
      console.log('Updated services:', AppStore.serviceList);
    });
  }, []);
  
  return (
    <>
  {AppStore.isLogin&&<Service2/>}  
     {services.length>0 ? (
     <div>{services.map((v, i) => (
      <div key={i}>
        <br />
        <Cards serviceName={v.serviceName} price={v.price} description={v.description}/>
       
      </div>
    ))}</div>
) : (
  <p>No services available</p>
)}
 
    </>
  );
};
export default ServicesList;