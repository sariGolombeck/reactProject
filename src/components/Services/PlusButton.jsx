import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import AppStore from '../store-mobx/Services';
import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
  www: {
    margin: '10vw',
    borderRadius: '50%',
    width: '70px',
    height: '70px',
    minWidth: 'unset',
    minHeight: 'unset',
    padding: 0,
  },
}));
export default function PlusButton() {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(serviceDetails)
    AppStore.setServiceList(serviceDetails);
  };

  const handleInputChange = (event) => {

    setServiceDetails(() => ({
      ...serviceDetails,
      [event.target.name]: event.target.value
    }),
    );
  };
  const [serviceDetails, setServiceDetails] = useState({
    serviceName:"",
    description:"",
    price:"",
})

  return (
    <React.Fragment>
      <Button
      variant="outlined"
      style={{ margin: '10vw',
      borderRadius: '50%',
      width: '70px',
      height: '70px',
      minWidth: 'unset',
      minHeight: 'unset',
      position: 'fixed', bottom: '20px', left: '20px' ,
      padding: 0,}}
      onClick={handleClickOpen}
    >
      <AddIcon />
    </Button>
      {/* <Button variant="outlined" style={{margin:'10vw'}} onClick={handleClickOpen}>
Enter your new service here!
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="dialog-title"
      >
        <DialogTitle id="dialog-title">Service</DialogTitle>
        <DialogContent>
          <TextField
            label="Your service"
            name="serviceName"
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
         < TextField
            label="Description"
            name="description"
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
            < TextField
            label="Price"
            name="price"
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
