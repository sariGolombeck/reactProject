import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import AppStore from '../store-mobx/AppStore';

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
    AppStore.setServiceList(inputValue);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    
  };

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
        <DialogTitle id="dialog-title">Input Form</DialogTitle>
        <DialogContent>
          <TextField
            label="Input"
            value={inputValue}
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
