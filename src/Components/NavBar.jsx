
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../images/U_bx31.svg'
import ScrollToSection from './ScrollToSection';


const CustomNavbar = () => {
    let expand = 'lg';

    const handleOpen = ()=>{
        window.open('https://drive.google.com/file/d/1AfNbZcl9o9I_EQSFuZ7ucMuBbdDMcYCb/view?usp=share_link' , '_blank','noopener,noreferrer');
        
    }

    return (
        <Navbar key={expand} bg="trasnparent" variant='dark' expand={expand} className="mb-3 container-lg c-nav ">
            <Container fluid className='py-3 px-lg-3 '>
                <Navbar.Brand href="#" >
                    <img src={Logo} alt="" className='c-nav_logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}  />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    className="bg-transparent border-0 "
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="top"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                            <img src={Logo} className='img-logo' alt="" />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="m-lg-0 m-2 h-auto  rounded-3">
                        <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                            <Nav.Link href="/" className='px-sm-4 py-lg-0 py-3 text-center c-nav_links'   >
                                <h4>Home</h4>
                            </Nav.Link>
                            <Nav.Link className='px-sm-4 py-lg-0 py-3 text-center c-nav_links' >
                                <ScrollToSection target='about' >
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
                                <button className='btn btn-outline-light' onClick={()=>handleOpen()}>Resume</button>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
