// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import Dashboard from './components/Dashboard';
import React, { useState } from 'react';
import Event from './components/Event';

import 'bootstrap/dist/css/bootstrap.css'
import './assets/App.css';

const PASSWORD = 'BallHog'

function App() {
  const [access, setAccess] = useState(false);
  const [pass, setPass] = useState();

  const getAccess = () => {
    let status = false
    if(pass === PASSWORD && access){
      status = true
    }

    return status
  }

  console.log(access,'access')
  return (
    <>
      <div className="p-2 bg-primary text-white text-left">
        <h1>BallHog Demo</h1>
      </div>
      {/* <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/event">Event</a>
            </li>
          </ul>
        </div>
      </nav> */}
      <div className='container'>
        {/* <Dashboard /> */}
        {
          getAccess() ?
            <Event /> :
            <div className='my-3'>
              <div className='row'>
                <div className='col-12 text-center'>
                  {/* <h1>This is Security Part.</h1> */}
                  <input
                    className='col-12'
                    value={pass}
                    onChange={(evt) => {
                      setPass(evt.target.value)
                      setAccess(false)
                    }}
                  />
                  <button
                    className='btn btn-primary mt-3'
                    onClick={() =>{
                      setAccess(true)
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
        }
      </div>
    </>
  );
}

export default App;
