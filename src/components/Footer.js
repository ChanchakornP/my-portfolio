import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <Container fluid className="footer">
            <Row>
                <Col md={6} className="text-center text-md-start">
                    <p>© {new Date().getFullYear()} Chanchakorn Pattana.</p>
                </Col>
                <Col md={6} className="text-center text-md-end">
                    <a
                        href="https://github.com/ChanchakornP"
                        target="_blank"
                        className="text-light me-3"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        className="text-light"
                    >
                        LinkedIn
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;
