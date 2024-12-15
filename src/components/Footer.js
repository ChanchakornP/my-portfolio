import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTheme } from "../ThemeContext";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    const { theme } = useTheme();

    return (
        <Container fluid className={`footer ${theme === "light" ? "footer-bg-light" : "footer-bg-dark"}`}>

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
                        <AiFillGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/"
                        style={{ color: theme === "light" ? "black" : "white" }}
                        target="_blank"
                    >
                        <FaLinkedinIn />
                    </a>
                </Col>
            </Row>

        </Container>
    );
}

export default Footer;
