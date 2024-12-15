import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useTheme } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const { theme, toggleTheme } = useTheme();
    return (
        <Navbar bg={theme === "dark" ? "dark" : "light"} expand="lg" fixed="top" >
            <Container>
                <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                <button
                    className="btn btn-outline-primary d-flex align-items-center"
                    onClick={toggleTheme}
                    style={{
                        border: "none",
                        background: "transparent",
                        fontSize: "1.5rem",
                        cursor: "pointer",
                    }}
                >
                    <FontAwesomeIcon
                        icon={theme === "light" ? faSun : faMoon}
                        style={{ color: theme === "light" ? "rgb(238, 93, 20)" : "#FFD700" }}
                    />
                </button>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About Me</Nav.Link>
                        <Nav.Link href="/resume">Resume</Nav.Link>
                        <Nav.Link href="/project">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default Header;