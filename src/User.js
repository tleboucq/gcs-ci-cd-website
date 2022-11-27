import './User.css';
import React from 'react';
import { StateOpen, StateUsers } from './App'; 
import Button from '@mui/material/Button';
import { useContext} from 'react';


function User({setOpen, setUsers}) {
  
 // const open = useContext(StateOpen);

 const users = useContext(StateUsers);

  //let user = 'samy'

  //console.log(users);

  //let arrayUsersStringified = JSON.stringify(users);
  const listItems = users.map((d) => <li className='nobullet' key={d}>{JSON.stringify(d)}</li>);
  //console.group(listItems);

  const handleClickClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <header>
        <p>Users collection</p>
        <p>
        {listItems}
        </p>
        <p>
        <Button variant="outlined" onClick={handleClickClose}>
        Back
      </Button>
        </p>
      </header>
    </div>
  );
}

export default User;
