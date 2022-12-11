import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import User from './User';
import { useState, createContext} from 'react';
import Dialog from './Dialog';
import axios from 'axios';

export const StateOpen2 = createContext(null);
export const StateOpen = createContext(null);
export const StateUsers = createContext(null);

function App() {

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [users, setUsers] = useState([]);

  const microservice1ButtonHandler = () => {
    //console.log('sss');
    setOpen(true);
    //console.log(open);

    const url = "http://34.160.51.212/microservice1"
    axios
      .get(url, {
        headers: {
          "Access-Control-Allow-Origin": true
        }
      })
      .then(function (response) {
        //console.log(response);
        //console.log(response.data);
        setUsers(response.data);
      }).catch(function (error) {
        console.log(error);
      });
  }

  const microservice1Button = () => {
    return (
      <React.Fragment>
          <Button onClick={microservice1ButtonHandler} variant="contained" className='cta-button1'>
            GET user infos (microservice 1)
          </Button>

          <Button onClick={microservice2ButtonHandler} variant="contained" className='cta-button1'>
            POST user infos (microservice 2)
          </Button>
      </React.Fragment>
    )
  }

  const microservice2ButtonHandler = () => {
    console.log(open2);
    setOpen2(true);
  }

  const component = () => {
        if (open === true) return <User setOpen={setOpen} />
        else if (open2 === true) return <Dialog setOpen2={setOpen2} />
        else if (open === false) return microservice1Button()
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
        <StateOpen2.Provider value={open2}>
        <StateOpen.Provider value={open2}>
        <StateUsers.Provider value={users}>
        {component()}
        </StateUsers.Provider>
        </StateOpen.Provider>
        </StateOpen2.Provider>
        
        </p>
      </header>
    </div>
  );
}

export default App;
