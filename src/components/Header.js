import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function Header() {
    return (
        <div className="header">
            <Navbar expand="lg" className="bg-body">
                <Container>
                    <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/about">About Me</Nav.Link>
                            <Nav.Link href="/resume">Resume</Nav.Link>
                            <NavDropdown title="Projects" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;