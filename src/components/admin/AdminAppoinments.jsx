
// import { useState,useEffect } from "react"
// import Appointments from "../store-mobx/Appointments";
// import { autorun } from 'mobx';
// // import CardsMeeting from "../CardsMeeting";

// const AdminAppoinment=()=>{

// // const [arr,setArr]=AppStore.appointments();

// // const [appoinments,setappoinments]=useState(

// //     servicesDescription=arr.servicesDescription,
// //     servicePrice=arr.servicePrice,
// //     dateTime=arr.dateTime,
// //     clientName=arr.clientName,
// //     clientPhone=arr.clientPhone,
// //     clientEmail=arr.clientEmail
// //    )
// const [appoinmentsArr, setappoinmentsArr] = useState(Appointments.appointments);
// useEffect(() => {
//   // Initialize the services with the current value from AppStore.serviceList
//   setappoinmentsArr(Appointments.appointments);

//   // Use autorun to update the state whenever AppStore.serviceList changes
//   autorun(() => {
//     setappoinmentsArr(Appointments.appointments);
//     console.log('Updated services:', Appointments.appointments);
//   });
// }, []);
// //     const [appoinmentsArr, setappoinmentsArr] = useState(AppStore.appointments);
// //   {
// //     useEffect(() => {
// //       // Initialize the services with the current value from AppStore.serviceList
// //       setappoinmentsArr(AppStore.appointments);
// //   console.log(AppStore.appointments.dateTime)
// //       // Use autorun to update the state whenever AppStore.serviceList changes
      
// //     }),[]}

//  return(
//     <>

//   {appoinmentsArr.length>0 ? (
//      <p>{appoinmentsArr.map((v, i) => (
//       <div key={i}>
//         <br />
//        <CardsMeeting b={v}/>
//       </div>
//     ))}</p>
// ) : (
//   <p>No Meetings are found </p>
// )}
// {/* {appoinmentsArr.length > 0 ? (
//   <p>
//     {appoinmentsArr.map((v, i) => (
//       <div key={i}>
//         <br />
//         <span style={{ color: v.dateTime.getDay() === new Date().getDay() ? 'red' : v.dateTime.getDay() <= new Date().getDay() + 7 ? 'orange' : 'green' }}>
//           {v.dateTime.getDay() === new Date().getDay() ? 'Today' : v.dateTime.toDateString()}        {v.clientName}

//         </span>
//       </div>
//     ))}
//   </p>
// ) : (
//   <p>No appointments available</p>
// )} */}

//     </>
//  )
//  }
//  export default AdminAppoinment