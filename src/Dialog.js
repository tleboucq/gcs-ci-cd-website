import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { StateOpen2 } from './App';
import { useState, useContext} from 'react';
import axios from 'axios';

export default function FormDialog({setOpen2}) {

  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');



  const open2 = useContext(StateOpen2);
  console.log(open2);

  const handleClickOpen = () => {
    console.log(open2);
    setOpen2(true);
  };

  const handleClose = () => {
    console.log(open2);
    setOpen2(false);
  };


  const handlePost = () => {
      /* console.log(email);
      console.log(firstname);
      console.log(lastname); */

      const data = {
        email: email,
        firstname: firstname,
        lastname: lastname
      };

      console.log(data);

      const url = "http://34.160.109.71:80/microservice2"

      axios
        .post(url, data, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
          }
        })
        .then(function (response) {
          console.log(response);
          setOpen2(false);
        }).catch(function (error) {
          console.log(error);
        });
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open2} onClose={handleClose}>
        <DialogTitle>DB POST</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Write on Database by filling the following fields
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="firstname"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={e => {
              setFirstName(e.target.value)
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={e => {
              setLastName(e.target.value)
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handlePost}>POST</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}