import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout'
import Home from '../src/Home'
import Map from './containers/Map/Map'

import {BrowserRouter, NavLink, Redirect, Route, Switch} from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';

function App() {
    return(
                <Layout>
                    <BrowserRouter>
                        <Navbar bg="dark" variant="dark" expand="sm" >
                            <Navbar.Brand>Weatherboi</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                                    <Nav.Link as={NavLink} to="/radar">Radar</Nav.Link>
                                </Nav>
                                <input
                                    type="text"
                                    value="Search"
                                />
                            </Navbar.Collapse>
                        </Navbar>
                        <Switch>
                            <Route exact path='/home' component={Home}/>
                            <Route exact path='/radar' component={Map}/>
                            <Redirect from="/" to="/home"/>
                            
                        </Switch>
                    </BrowserRouter>
                </Layout>
    );
}

export default App;
