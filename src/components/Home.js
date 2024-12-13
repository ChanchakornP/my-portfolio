import { Container, Row, Col, Image } from "react-bootstrap";
import homeLogo from "../logo.svg"
import TypingAnimation from "./TypingAnimation";
function Home() {
    return (
        <Container className="home" id="home" maxWidth="sm">
            <Row>
                <Col md={8} className="home-header">
                    <h1 style={{ paddingTop: 15 }} className="heading">
                        WELCOME TO MY WEBSITE
                    </h1>

                    <h1 className="heading-name">
                        I'M
                        <strong className="main-name"> CHANCHAKORN PATTANA</strong>
                    </h1>
                </Col>

                <Col md={4} style={{ paddingBottom: 20 }}>
                    <img
                        src={homeLogo}
                        alt="home pic"
                        className="img-fluid"
                        style={{ maxHeight: "450px" }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TypingAnimation ></TypingAnimation>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;