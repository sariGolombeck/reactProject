// import React, { useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
// import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
// import DetailsS from './store-mobx/DetailsS';
// const { Option } = Select;
// const Edit = () => {
//   const [open, setOpen] = useState(false);
//   const showDrawer = () => {
//     setOpen(true);
//   };
//   const onClose = () => {
//     setOpen(false);
//   };
//   const handleInputChange = (event) => {  
//     setBussinessDetails(() => ({
//       ...bussinessDetails,
//      [event.target.id]:event.target.value
//     }),
//   );
//   };
//   const onSubmit=()=>{
//     DetailsS.setIsGetDetails(bussinessDetails)
//   }

//   const [bussinessDetails,setBussinessDetails]=useState(
//     {
//         name:'',
//         address:'',
//         phone:'',
//         owner:'',
//         logo:'',
//         description:'',
//     }
//     )

//   return (
//     <>
//       <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
//         Edit
//       </Button>
//       <Drawer
//         title="Edit your bussiness details"
//         width={720}
//         onClose={onClose}
//         open={open}
//         styles={{
//           body: {
//             paddingBottom: 80,
//           },
//         }}
//         extra={
//           <Space>
//             <Button onClick={onClose}>Cancel</Button>
//             <Button onClick={onClose} type="primary">
//               Submit
//             </Button>
//           </Space>
//         }
//       >
//         <Form layout="vertical" hideRequiredMark>
//           <Row gutter={16}>
//             <Col span={12}>
//               <Form.Item
//                 name="Bussiness name"
//                 label="Bussiness name"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter bussiness name',
//                   },
//                 ]}
//               >
//                 <Input placeholder="bussiness name" />
//               </Form.Item>
//             </Col>



//             <Col span={12}>
//               <Form.Item
//                 name="Owner"
//                 label="Owner"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter your bussiness name',
//                   },
//                 ]}
//               >
//                 <Input placeholder="bussiness name" />
//               </Form.Item>
//             </Col>



//             <Col span={12}>
//               <Form.Item
//                 name="Phone"
//                 label="Phone"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter phone',
//                   },
//                 ]}
//               >
//                 <Input placeholder="Please enter your phone" />
//               </Form.Item>
//             </Col>





//             <Col span={12}>
//               <Form.Item
//                 name="url"
//                 label="Url"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'Please enter url',
//                   },
//                 ]}
//               >
//                 <Input
//                   style={{
//                     width: '100%',
//                   }}
//                   addonBefore="http://"
//                   addonAfter=".com"
//                   placeholder="Please enter logo url"
//                 />
//               </Form.Item>
//             </Col>
//           </Row>
//           <Row gutter={16}>
  
           
//           </Row>
//           <Row gutter={16}>
          
           
//           </Row>
//           <Row gutter={16}>
//             <Col span={24}>
//               <Form.Item
//                 name="description"
//                 label="Description"
//                 rules={[
//                   {
//                     required: true,
//                     message: 'please enter url description',
//                   },
//                 ]}
//               >
//                 <Input.TextArea rows={4} placeholder="please enter url description" />
//               </Form.Item>
//             </Col>
//           </Row>
//         </Form>
//       </Drawer>
//     </>
//   );
// };
// export default Edit;



import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';
import DetailsS from '../store-mobx/DetailsS';

const { Option } = Select;
const buttonStyle = {
display: 'flex', justifyContent: 'flex-end', marginTop: '20px'
};
const Edit = () => {
  const [open, setOpen] = useState(false);
  const [bussinessDetails, setBussinessDetails] = useState({
    name: '',
    address: '',
    phone: '',
    owner: '',
    logo: '',
    description: '',
  });

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setBussinessDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));
  };

  // const onSubmit = () => {
  //   console.log(bussinessDetails);
  //   DetailsS.setSiteDetails(bussinessDetails);
  //   onClose();
  // };
    const onSubmit = () => {
    console.log(bussinessDetails);
    DetailsS.setEditDetails(bussinessDetails);
    onClose();
    
  };

  return (
    <>
      {/* <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Edit
      </Button> */}
        {/* <Button type="primary" onClick={showDrawer} style={buttonStyle}>
      Edit your business details
    </Button> */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
      <Button
        type="primary"
        onClick={showDrawer}
        // style={buttonStyle}
        className="top-right-button"
      >
        Edit your business details
      </Button>
      </div>
      <Drawer
        title="Edit your business details"
        width={720}
        onClose={onClose}
        open={open}
        style={{ paddingBottom: 80 }}
        footer={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onSubmit} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Business name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter business name',
                  },
                ]}
              >
                <Input
                  placeholder="Business name"
                  id="name"
                  value={bussinessDetails.name}
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Owner"
                rules={[
                  {
                    required: true,
                    message: 'Please enter owner name',
                  },
                ]}
              >
                              <Input
                  placeholder="Owner"
                  id="owner"
                  value={bussinessDetails.owner}
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Address"
                rules={[
                  {
                    required: true,
                    message: 'Please enter address',
                  },
                ]}
              >
                <Input
                  placeholder="Address"
                  id="address"
                  value={bussinessDetails.address}
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Phone"
                rules={[
                  {
                    required: true,
                    message: 'Please enter phone number',
                  },
                ]}
              >
                <Input
                  placeholder="Phone"
                  id="phone"
                  value={bussinessDetails.phone}
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Logo"
              >
                <Input
                  placeholder="Logo"
                  id="logo"
                  value={bussinessDetails.logo}
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Description"
              >
                <Input.TextArea
                  placeholder="Description"
                  id="description"
                  value={bussinessDetails.description}
                  onChange={handleInputChange}
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export default Edit;
