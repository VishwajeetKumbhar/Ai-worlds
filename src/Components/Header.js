import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import "../App.css"

const Header = () => {
    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand className='fs-2 fw-bold' >AI <span className='text-primary' >World</span></Navbar.Brand>
                    <Nav className="">
                        <NavLink to="/" className='nav-link active text-primary' >Home</NavLink>
                        <NavLink to="/contact" className='nav-link active text-primary' >Contact</NavLink>
                        <NavLink to="/gallery" className='nav-link active text-primary' >Gallery</NavLink>
                    </Nav>
                </Container>
            </Navbar>

            
        </>
    )
}

export default Header