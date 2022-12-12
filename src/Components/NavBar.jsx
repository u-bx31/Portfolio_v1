
import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/U_bx31.svg'
import ScrollToSection from './ScrollToSection';
import * as Scroll from 'react-scroll'


const CustomNavbar = () => {
    let expand = 'lg';
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        window.open('https://drive.google.com/file/d/1CZdamK0t3BiPNcG_GkQ7V4mQi57FSl9l/view?usp=share_link', '_blank', 'noopener,noreferrer');
    }
    useEffect(() => {
        var Events = Scroll.Events;
        Events.scrollEvent.register('begin', function (to, element) {
            setTimeout(() => {
                setOpen(false)
            }, 40 * 20);
        });
    })
    return (
        <Navbar key={expand} bg="trasnparent" variant='dark' expand={expand} className="mb-lg-3 mb-0 container-lg c-nav p-0">
            <Container fluid className='py-lg-3 px-lg-3 px-0'>
                <div className='c-nav_top d-flex justify-content-between w-100 align-items-center ps-lg-0 ps-3'>
                    <Navbar.Brand href="#" >
                        <img src={Logo} alt="" className='c-nav_logo' />
                    </Navbar.Brand>
                    <button className='btn d-lg-none d-block border-0 bg-transparent c-nav_toggler p-0' onClick={() => setOpen(!open)} >
                        <div className={`${open && 'active'} `}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="70" viewBox="0 0 200 200">
                                <g stroke-width="6.5" strokeLinecap="round">
                                    <path
                                        d="M72 82.286h28.75"
                                        fill="#009100"
                                        fillRule="evenodd"
                                        stroke="#fff"
                                    />
                                    <path
                                        d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                                        fill="none"
                                        stroke="#fff"
                                    />
                                    <path
                                        d="M72 125.143h28.75"
                                        fill="#009100"
                                        fillRule="evenodd"
                                        stroke="#fff"
                                    />
                                    <path
                                        d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                                        fill="none"
                                        stroke="#fff"
                                    />
                                    <path
                                        d="M100.75 82.286h28.75"
                                        fill="#009100"
                                        fillRule="evenodd"
                                        stroke="#fff"
                                    />
                                    <path
                                        d="M100.75 125.143h28.75"
                                        fill="#009100"
                                        fillRule="evenodd"
                                        stroke="#fff"
                                    />
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
                <Navbar.Collapse
                    id={`responsive-navbar-nav`}
                    className={`bg-transparent border-0 ${open ? 'show' : 'hide'}`}
                >
                    <Nav className="justify-content-end align-items-center flex-grow-1 pe-3 "  >
                        <Nav.Link href="#" className='px-sm-4 py-lg-0 py-3 text-center c-nav_links'   >
                            <ScrollToSection target='home'  >
                                <h4>Home</h4>
                            </ScrollToSection>
                        </Nav.Link>
                        <Nav.Link className='px-sm-4 py-lg-0 py-3 text-center c-nav_links'  >
                            <ScrollToSection target='about'  >
                                <h4>About</h4>
                            </ScrollToSection>
                        </Nav.Link>
                        <Nav.Link className='px-sm-4 py-lg-0 py-3 text-center c-nav_links'  >
                            <ScrollToSection target='skills'><h4>Skills</h4></ScrollToSection>
                        </Nav.Link>
                        <Nav.Link className='px-sm-4 py-lg-0 py-3 text-center c-nav_links'  >
                            <ScrollToSection target='project'><h4>Projects</h4></ScrollToSection>
                        </Nav.Link>
                        <Nav.Link className='px-sm-4 py-lg-0 py-3 text-center c-nav_links'  >
                            <ScrollToSection target='contact'><h4>Contact</h4></ScrollToSection>
                        </Nav.Link>
                        <Nav.Link className='px-sm-4 py-lg-0 py-3 text-center c-nav_links' >
                            <button className='btn btn-outline-light' onClick={() => handleOpen()}>Resume</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
