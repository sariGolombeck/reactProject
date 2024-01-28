//  // const handleDateChange = (date) => {
//   //   console.log(date)
//   //   setInvitingDate(date.format('YYYY-MM-DDTHH:mm:ss.000Z'));
//   //   console.log(invitingDate)
//   //   console.log(invitingName)
//   //   // const formattedDateTime = date.format('MM-DD-YY');
//   //   // setFormData((prevData) => ({
//   //   //     ...prevData,
//   //   //     dateTime: formattedDateTime,
//   //   // }));
//   //   // handleInputChange({ target: { name: 'dateTime', value: formattedDateTime } });
//   // };
//   // const [invitingDate, setInvitingDate] = useState('');



// import { Button, DatePicker, Form, Input, Modal, Radio, Select, Switch } from 'antd';
// import React, { useState } from 'react';
// import Appointments from './store-mobx/Appointments';
// import SubmitBotton from './SubmitButtom';

// const FormSendAppointment = ({serviceName}) => {
//   const [componentSize, setComponentSize] = useState('default');
//   const [modalVisible, setModalVisible] = useState(false);

//   const [formDetails, setFormDetails] = useState({
//     serviceName: {serviceName},
//     servicesDescription: '',
//     servicePrice: 0,
//     dateTime:Date.now(),
//     clientName: '',
//     clientPhone: '',
//     clientEmail: '',
//   });
//   const onFormLayoutChange = ({ size }) => {
//     setComponentSize(size);
//   };

//   const showModal = () => {
//     setModalVisible(true);
//   };

//   const handleCancel = () => {
//     setModalVisible(false);
//   };
// const navigateToAnotherPage =()=>{

// }
// const handleInputChange = (event) => {
//   if (event.target.id ==dateTime) {
//     // event.target.value =(event.target.value.format('YYYY-MM-DDTHH:mm:ss.000Z'))};
//     event.target.value =moment(event.target.value, 'YYYY-MM-DD HH:mm:ss').format('MMM DD, YYYY h:mm A');}
//   setFormDetails(() => ({
//     ...formDetails,
//    [event.target.id]:event.target.value
//   }),
// );
// };
// const onSubmit=()=>{  

//   // setFormDetails(() => ({
//   // //   ...formDetails,
//   // //  [dateTime]:dateTime.format('YYYY-MM-DDTHH:mm:ss.000Z')
//   // }));
//   console.log(formDetails);

//   Appointments.setIsGetDetails(formDetails);
//   handleCancel();
// } 
//   return (
//     <>
//       <h1 style={{ textAlign: 'center' }}>שלום וברכה</h1>
//       <div style={{ display: 'flex', justifyContent: 'center' }}>
//         <Button type="primary" style={{ backgroundColor: 'purple', borderColor: 'purple' }} onClick={showModal}>פתיחת טופס</Button>
//       </div>

//       <Modal
//         visible={modalVisible}
//         onCancel={handleCancel}
//         footer={null}
//         centered
//       >
//         <Form
//           labelCol={{ span: 4 }}
//           wrapperCol={{ span: 14 }}
//           layout="horizontal"
//           initialValues={{ size: componentSize }}
//           onValuesChange={onFormLayoutChange}
//           size={componentSize}
//           style={{ maxWidth: 600 }}
//         >
//           <Form.Item label="Form Size" name="size">
//             <Radio.Group>
//               <Radio.Button value="small">Small</Radio.Button>
//               <Radio.Button value="default">Default</Radio.Button>
//               <Radio.Button value="large">Large</Radio.Button>
//             </Radio.Group>
//           </Form.Item>
//           <Form.Item label="Enter your Name" name="clientName" onChange={handleInputChange}>
//             <Input  />
//           </Form.Item>
//           <Form.Item label="service" name="service">
//            {serviceName};
//           </Form.Item>
//           <Form.Item label="Enter your phone number" name="clientPhone" onChange={handleInputChange}>
//             <Input  />
//           </Form.Item>
//           <Form.Item  value="clientEmail" onChange={handleInputChange} label="Enter your email" name="clientEmail" rules={[{ type: 'email', message: 'Please enter a valid email' }]}>
//             <Input />
//             </Form.Item>

//           <Form.Item label="Date and Time" onReset={handleInputChange} name="dateTime"> 
//             <DatePicker showTime/>
//           </Form.Item>

//           <Form.Item label="Switch" name="switch" valuePropName="checked">
//             <Switch />
//           </Form.Item>

//           <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
//             <Input onChange={handleInputChange} />
//           </Form.Item>
//           <Form.Item wrapperCol={{ offset: 4, span: 14 }}>

//             <Button htmlType="button" onClick={handleCancel} style={{ marginLeft: '10px' }}>
//               Cancel
//             </Button>
//           </Form.Item>
//           <Form.Item wrapperCol={{ offset: 4, span: 14 }}>

//   <Button type="primary" htmlType="submit" onClick={onSubmit} >
//     Submit
//   </Button>
// </Form.Item>
//         </Form>
//       </Modal>,

//     </>
//   );
//   }   
//  export default FormSendAppointment;
// const handleDateChange = (date) => {
//   console.log(date)
//   setInvitingDate(date.format('YYYY-MM-DDTHH:mm:ss.000Z'));
//   console.log(invitingDate)
//   console.log(invitingName)
//   // const formattedDateTime = date.format('MM-DD-YY');
//   // setFormData((prevData) => ({
//   //     ...prevData,
//   //     dateTime: formattedDateTime,
//   // }));
//   // handleInputChange({ target: { name: 'dateTime', value: formattedDateTime } });
// };
// const [invitingDate, setInvitingDate] = useState('');
import { Button, DatePicker, Form, Input, Modal, Radio, Select, Switch } from 'antd';
import React, { useState } from 'react';
import Appointments from '../store-mobx/AppointmentsS';
import SubmitBotton from '../SubmitButtom';
import Swal from 'sweetalert2'

const codeSnippetStyle = {
  color: !Appointments.isNewAppoinment ? 'red' : 'inherit',
};

 const  FormSendAppointment  = ({ sn}) => {
  const [componentSize, setComponentSize] = useState('default');
  const [modalVisible, setModalVisible] = useState(true);
  const [formDetails, setFormDetails] = useState({
    serviceName:sn,
    servicesDescription: '',
    servicePrice: 0,
    dateTime: null,
    clientName: '',
    clientPhone: '',
    clientEmail: '',
  });
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  const handleDateChange = (date) => {
    const formattedDate = date ? date.format('YYYY-MM-DD HH:mm:ss') : null;
    setFormDetails(() => ({
      ...formDetails,
      dateTime:formattedDate,
      serviceName:sn
    }),
    );
  };
  const showModal = () => {
modalVisible
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
  const navigateToAnotherPage = () => {
  }
  const handleInputChange = (event) => {

    setFormDetails(() => ({
      ...formDetails,
      [event.target.id]: event.target.value
    }),
    );
  };

  const onSubmit = () => {
     if (formDetails.clientName !== '' &&formDetails.dateTime!=null&& formDetails.clientEmail !== '' && formDetails.clientPhone !== '') {

Appointments.setAppointments(formDetails);
if(Appointments.isWell)
{
  Swal.fire({
    title: "Your appointment  determend!!",
    icon: "success",
  })   ,setModalVisible(false); 
}
else
Swal.fire("change the date!");

}
const resetForm = () => {
  setFormDetails({
    serviceName: '',
    servicesDescription: '',
    servicePrice: 0,
    dateTime: '',
    clientName: '',
    clientEmail: '',
  });
};

 
   
  

}
  return (
    <>
      <Modal
        open={modalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          initialValues={{ size: componentSize }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          style={{ maxWidth: 600 }}
        >
          <Form.Item label="Form Size" name="size">
            <Radio.Group>
              <Radio.Button value="small">Small</Radio.Button>
              <Radio.Button value="default">Default</Radio.Button>
              <Radio.Button value="large">Large</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="service" name="service">
        <h1>  {sn}</h1>  ;
          </Form.Item>
          <Form.Item label="Enter your Name" name="clientName" onChange={handleInputChange}rules={[{ required: true, message: 'Please enter your name' }]}>
            <Input />
          </Form.Item>
          {/* <Form.Item label="Enter your phone number" name="clientPhone" onChange={handleInputChange}>
            <Input />
          </Form.Item> */}
          <Form.Item value="clientEmail"  onChange={handleInputChange} label="Enter your email" name="clientEmail" rules={[{ type: 'email', message: 'Please enter a valid email' }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Phone Number" name="clientPhone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
            <Input onChange={handleInputChange} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 14 }}>

    
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 4, span: 14 }}>

      <Form.Item
        label="Date and Time"
        style={codeSnippetStyle}
        name="dateTime"
        rules={[{ required: true, message: 'Please choose an appointment datetime' }]}
      >
        <DatePicker showTime onChange={handleDateChange} />
      </Form.Item>
            <Button type="primary" htmlType="submit" onClick={onSubmit} >
              Submit
            </Button>
          </Form.Item> 
                 <Button htmlType="button" onClick={handleCancel} style={{ marginLeft: '10px' }}>
              Cancel
            </Button>
        </Form>
      </Modal>,

    </>
  );
}
export default FormSendAppointment;


