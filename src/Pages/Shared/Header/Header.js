
import React from 'react';
import { useState } from "react"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png'
import './Header.css'


const Header = () => {
    const {user, logOut} = useAuth()
    const [hasScrolled, setScrolled] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 50){
            setScrolled(true);
        }else {
            setScrolled(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <Navbar className={hasScrolled ? 'navbar headerScrolled': 'navbar'} variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to='/home'><img src={logo} style={{width:'30px'}} alt=''/>
                            <span className='ms-2 text-primary'>Prime Diagonstic</span></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link  as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link  as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link  as={Link} to="/team">Doctors</Nav.Link>
                        <Nav.Link  as={Link} to="/contact">Contact</Nav.Link>
                        {user?.email ?
                            <Nav.Link  onClick={logOut} variant="light">Logout</Nav.Link> :
                            <Nav.Link  as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text className='text-warning'>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;