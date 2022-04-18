import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handelSignOut = () => {
       
        signOut(auth)
    }
    return (
        
            <Navbar collapseOnSelect expand="lg"sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">DentalCare</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className='mx-3' as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className='mx-3' as={Link} to="/">Services</Nav.Link>
                            <Nav.Link className='mx-3' as={Link} to="/about">About</Nav.Link>
                            <Nav.Link className='mx-3' as={Link} to="/blog">Blog</Nav.Link>
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none ' onClick={handelSignOut}>Log Out</button>
                                    : <Nav.Link className='mx-3' as={Link} to="/login">Log In</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

       
    );
};

export default Header;