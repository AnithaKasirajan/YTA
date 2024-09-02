import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './components/dashboard.component';
import Analytics from './components/analytics.component';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="fixed-top appMainNav">
          <Button href='/' style={{ height: 'fit-content', fontSize: '24px', fontWeight: '600', backgroundColor: 'transparent', border: 'none', color: 'yellow', letterSpacing: '2px' }}>LogoHere</Button>
          <div className="col-md-5" style={{ display: 'flex', alignItems: 'center', padding: '0px', margin: '0px', justifyContent: 'end' }}>
            <Button id="demoMenuButton" style={{ fontSize: '14px', color: 'yellow' }} href="/"> Layout One</Button>
            <Button id="demoMenuButton" style={{ fontSize: '14px', color: 'yellow' }} href="/LayoutTwo">Layout Two</Button>
            <Button id='demoMenuButton' style={{ fontSize: '14px', color: 'yellow' }} href="/LayoutThree">Layout Three</Button>

            <Dropdown align="end">
              <Dropdown.Toggle variant="link" id="dropdown-profile" style={{ color: 'yellow', fontSize: '24px', padding: 0 }}>
                <FontAwesomeIcon icon={faUserCircle} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path='/LayoutTwo' element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
