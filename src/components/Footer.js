import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTheme } from "../ThemeContext"; // Assuming you are using the ThemeContext

function Footer() {
    const { theme } = useTheme(); // Access the current theme

    return (
        <Container fluid className="footer">
            <Container>

                <Row>
                    <Col md={6} className="text-center text-md-start">
                        <p>© {new Date().getFullYear()} Chanchakorn Pattana.</p>
                    </Col>
                    <Col md={6} className="text-center text-md-end">
                        <a
                            href="https://github.com/ChanchakornP"
                            target="_blank"
                            className={`me-3 ${theme === "light" ? "text-dark" : "text-light"}`}
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            className={theme === "light" ? "text-dark" : "text-light"}
                        >
                            LinkedIn
                        </a>
                    </Col>
                </Row>
            </Container>

        </Container>
    );
}

export default Footer;
