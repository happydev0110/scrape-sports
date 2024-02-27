// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Event from './components/Event';

import 'bootstrap/dist/css/bootstrap.css'
import './assets/App.css';

function App() {
  return (
    <>
      <div className="p-2 bg-primary text-white text-left">
        <h1>EventDashboard</h1>
        {/* <p>Resize this responsive page to see the effect!</p> */}
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
      <div className='container-fluid'>
        {/* <Dashboard /> */}
        <Event />
      </div>
    </>
  );
}

export default App;
