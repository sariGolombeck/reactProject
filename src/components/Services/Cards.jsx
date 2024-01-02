// // // // // // // import React from 'react';
// // // // // // // import { Card } from 'antd';
// // // // // // // const gridStyle = {
// // // // // // //   width: '25%',
// // // // // // //   textAlign: 'center',
// // // // // // // };
// // // // // // // const Cards = ({nservice}) => (
// // // // // // //   <Card title="Service list">
// // // // // // //     {/* <Card.Grid style={gridStyle}>Content</Card.Grid> */}
// // // // // // //     <Card.Grid hoverable={false} style={gridStyle}>
// // // // // // //       Content
// // // // // // //     </Card.Grid>
// // // // // // //     <Card.Grid style={gridStyle}>{nservice}</Card.Grid>
// // // // // // //     {/* <Card.Grid style={gridStyle}>Content</Card.Grid>
// // // // // // //     <Card.Grid style={gridStyle}>Content</Card.Grid>
// // // // // // //     <Card.Grid style={gridStyle}>Content</Card.Grid>
// // // // // // //     <Card.Grid style={gridStyle}>Content</Card.Grid> */}
// // // // // // //   </Card>
// // // // // // // );
// // // // // // // export default Cards;




// // // // // // import React from 'react';
// // // // // // import { Card } from 'antd';
// // // // // // const gridStyle = {
// // // // // //   width: '25%',
// // // // // //   textAlign: 'center',
// // // // // // };
// // // // // // const Cards = ({nservice}) => (
// // // // // //   <Card title="Service list">
// // // // // //     {/* <Card.Grid style={gridStyle}>Content</Card.Grid> */}
// // // // // //     <Card.Grid hoverable={false} style={gridStyle}>
// // // // // //       Content
// // // // // //     </Card.Grid>
// // // // // //     {/* <Card.Grid style={gridStyle}>{nservice}</Card.Grid> */}

// // // // // //   </Card>
// // // // // // );
// // // // // // export default Cards;
// // // // // import React from 'react';
// // // // // import { makeStyles } from '@material-ui/core/styles';
// // // // // import { Card, CardContent, CardActions, Typography, Button } from '@material-ui/core';

// // // // // const useStyles = makeStyles((theme) => ({
// // // // //   card: {
// // // // //     maxWidth: 300,
// // // // //     margin: theme.spacing(2),
// // // // //   },
// // // // //   content: {
// // // // //     paddingBottom: theme.spacing(1),
// // // // //   },
// // // // //   actions: {
// // // // //     justifyContent: 'flex-end',
// // // // //   },
// // // // // }));

// // // // // const Cards = ({ title, description, price, addToCart }) => {
// // // // //   const classes = useStyles();

// // // // //   const handleAddToCart = () => {
// // // // //     addToCart();
// // // // //   };
// // // // //   return (
// // // // //     <Card className={classes.card}>
// // // // //       <CardContent className={classes.content}>
// // // // //         <Typography variant="h5" component="h2">
// // // // //           {title}
// // // // //         </Typography>
// // // // //         <Typography variant="body2" color="textSecondary">
// // // // //           {description}
// // // // //         </Typography>
// // // // //         <Typography variant="h6" color="primary">
// // // // //           ${price}
// // // // //         </Typography>
// // // // //       </CardContent>
// // // // //       <CardActions className={classes.actions}>
// // // // //         <Button variant="contained" color="primary" onClick={handleAddToCart}>
// // // // //           Add to Cart
// // // // //         </Button>
// // // // //       </CardActions>
// // // // //     </Card>
// // // // //   );
// // // // // };

// // // // // export default Cards;
// // // // import React from 'react';
// // // // import { Card, CardContent, Typography, Button } from '@material-ui/core';
// // // // import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// // // // const Cards = () => {
// // // //   const handleAddToCart = () => {
// // // //     // Handle adding item to the cart
// // // //   };

// // // //   return (
// // // //     <Card>
// // // //       <CardContent>
// // // //         <Typography variant="h5" component="h2">
// // // //           Product Title
// // // //         </Typography>
// // // //         <Typography color="textSecondary">
// // // //           Product description goes here.
// // // //         </Typography>
// // // //         <Typography variant="h6" component="p">
// // // //           $9.99
// // // //         </Typography>
// // // //       </CardContent>
// // // //       <Button
// // // //         variant="contained"
// // // //         color="primary"
// // // //         startIcon={<ShoppingCartIcon />}
// // // //         onClick={handleAddToCart}
// // // //       >
// // // //         Add to Cart
// // // //       </Button>
// // // //     </Card>
// // // //   );
// // // // };

// // // // export default Cards;
// // // import React from 'react';
// // // import { Card, CardContent, Typography, Button } from '@material-ui/core';
// // // import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// // // const Cards = ({ title, description, price }) => {
// // //   const handleAddToCart = () => {
// // //     // Handle adding item to the cart
// // //   };

// // //   return (
// // //     <Card>
// // //       <CardContent>
// // //         <Typography variant="h5" component="h2">
// // //           {title}
// // //         </Typography>
// // //         <Typography color="textSecondary">
// // //           {description}
// // //         </Typography>
// // //         <Typography variant="h6" component="p">
// // //           {price}
// // //         </Typography>
// // //       </CardContent>
// // //       <Button
// // //         variant="contained"
// // //         color="primary"
// // //         startIcon={<ShoppingCartIcon />}
// // //         onClick={handleAddToCart}
// // //       >
// // //         Add to Cart
// // //       </Button>
// // //     </Card>
// // //   );
// // // };

// // // export default Cards;
// // import React from 'react';
// // import { Card, CardContent, Typography, Button } from '@material-ui/core';
// // import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// // import { makeStyles } from '@material-ui/core/styles';
// // import FormSendAppointment from './FormSendAppointment';

// // const useStyles = makeStyles({
// //   card: {
// //     width: 300,
// //     height: 150,
// //   },
// //   content: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     justifyContent: 'space-between',
// //     height: '100%',
// //   },
// // });

// // const Cards = ({ title, description, price }) => {
// //   const classes = useStyles();

// //   const handleAddToCart = () => {
  

// //   };

// //   return (
// //     <Card className={classes.card}>
// //       <CardContent className={classes.content}>
// //         <div>
// //           <Typography variant="h6" component="h2">
// //             title:
// //             {title}
// //           </Typography>
// //           <Typography color="textSecondary">
// //             description:
// //             {description}
// //           </Typography>
// //         </div>
// //         <div>
// //           <Typography variant="h6" component="p">
// //             price:
// //             {price}
// //           </Typography>
// //           <Button
// //             variant="contained"
// //             color="primary"
// //             startIcon={<ShoppingCartIcon />}
// //             onClick={{FormSendAppointment}
// //           }
// //           >
// //             Add to Cart
// //           </Button>
// //         </div>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default Cards;
// import React, { useState } from 'react';
// import { Card, CardContent, Typography, Button } from '@material-ui/core';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { makeStyles } from '@material-ui/core/styles';
// import FormSendAppointment from './FormSendAppointment';

// const useStyles = makeStyles({
//   card: {
//     width: 300,
//     height: 150,
//   },
//   content: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     height: '100%',
//   },
// });

// const Cards = ({ title, description, price }) => {
//   const classes = useStyles();
//   const [showAppointmentForm, setShowAppointmentForm] = useState(true);

//   const handleAddToCart = () => {
//     setShowAppointmentForm(true);
//     console.log(this.title);
//   };

//   return (
//     <Card className={classes.card}>
//       <CardContent className={classes.content}>
//         <div>
//           <Typography variant="h6" component="h2">
//             title:
//             {title}
//           </Typography>
//           <Typography color="textSecondary">
//             description:
//             {description}
//           </Typography>
//         </div>
//         <div>
//           <Typography variant="h6" component="p">
//             price:
//             {price}
//           </Typography>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<ShoppingCartIcon />}
//            onClick= {setShowAppointmentForm}
//           >
//             Add to Cart
//           </Button>
//         </div>
//       </CardContent><FormSendAppointment serviceName={title} />
//       {/* {showAppointmentForm && } */}

//     </Card>
//   );
// };

// export default Cards;
import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import FormSendAppointment from '../Appoinments/FormSendAppointment';
import AppStore from '../store-mobx/AppStore';

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 150,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});

const Cards = ({ title, description, price }) => {
  const classes = useStyles();
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const handleAddToCart = () => {
   setShowAppointmentForm(true);
  };
  return (
    <>
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <div>
          <Typography variant="h6" component="h2">
            title:
            {title}
          </Typography>
          <Typography color="textSecondary">
            description:
            {description}
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="p">
            price:
            {price}
          </Typography>
          {!AppStore.isLogin&&
          < Button
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
            onClick={handleAddToCart}
          >
            your appointment
          </Button>
}
        </div>
      </CardContent>
    </Card>     {showAppointmentForm&&
     <FormSendAppointment sn={title} />}

    </>
  );
};
export default Cards;
