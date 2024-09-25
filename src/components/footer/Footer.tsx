import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyFooter() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="/contacts">Contacts</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyFooter;