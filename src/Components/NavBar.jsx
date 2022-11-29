import { motion } from 'framer-motion';
import { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../images/U_bx31.svg'


const CustomNavbar = () => {
    const expand = 'lg';
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar key={expand} bg="trasnparent" variant='dark' expand={expand} className="mb-3">
                <Container fluid className='py-3  px-1 c-nav'>
                    <Navbar.Brand href="#" >
                        <img src={Logo} alt="" className='c-nav_logo'/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={()=> handleShow()} />
                    <Navbar.Offcanvas
                        show={show}
                        id={`offcanvasNavbar-expand-${expand}`}
                        className="bg-transparent border-0 "
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="top" 
                    >
                        <Offcanvas.Header>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <img src={Logo} className='img-logo' alt="" />
                            </Offcanvas.Title>
                            <CloseButton variant="white" onClick={()=> handleClose() } />
                        </Offcanvas.Header>
                        <Offcanvas.Body className="m-lg-0 m-2 h-auto  rounded-3">
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="" className='px-sm-4 py-lg-0 py-3 text-center c-nav_links'  >
                                    <h4>Home</h4>
                                </Nav.Link>
                                <Nav.Link href="" className='px-sm-4 py-lg-0 py-3 text-center c-nav_links' >
                                    <h4>About</h4>
                                </Nav.Link>
                                <Nav.Link href="" className='px-sm-4 py-lg-0 py-3 text-center c-nav_links' >
                                    <h4>Skills</h4>
                                </Nav.Link>
                                <Nav.Link href="" className='px-sm-4 py-lg-0 py-3 text-center c-nav_links' >
                                    <h4>Contact</h4>
                                </Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomNavbar;
