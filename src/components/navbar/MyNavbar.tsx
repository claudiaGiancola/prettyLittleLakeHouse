import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function MyNavbar() {
    return (
        <>
                <Navbar sticky="top" expand="sm" bg="primary" data-bs-theme="dark">
                    <Container fluid>
                        <Navbar.Brand href="/">Pretty Little Lake House</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-sm`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-around flex-grow-1 pe-3">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="gallery">Gallery</Nav.Link>
                                    <Nav.Link href="itineraries">Itineraries</Nav.Link>
                                    <Nav.Link href="contacts">Contacts</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            
        </>
    );
}

export default MyNavbar;