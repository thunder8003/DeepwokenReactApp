import '../css/NavigationBar.css';
import React from 'react';
import { useState } from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';

import Home from './Home'
import Weapons from '../components/Weapons'

function NavigationBar() {
    const [activePage, setPage] = useState({name: 'Home', page: <Home />})

    return (
        <div>
            <Container className="NavigationBar" fluid="true">
                    <Navbar variant="dark" bg="dark" sticky="top" className="p-2">
                        <img src="/images/deepwoken_logo.jpg" alt="Deepwoken"></img>
                        <Navbar.Brand>Deepwoken Wiki</Navbar.Brand>
                    <Nav className="me-auto">
                        <Button variant={getVariant(activePage, 'Home')} onClick={() => setPage({name: 'Home', page: <Home />})}>Home</Button>
                        <Button variant={getVariant(activePage, 'Weapons')} onClick={() => setPage({name: 'Weapons', page: <Weapons />})}>Weapons</Button>
                    </Nav>
                    <Navbar.Text>Created by: <strong>Tesla Semi#7762</strong></Navbar.Text>
                </Navbar>
            </Container>
            {activePage.page}
        </div>
    )
}

function getVariant(current, target) {
    return current.name === target ? 'primary' : 'secondary'
}

export default NavigationBar
