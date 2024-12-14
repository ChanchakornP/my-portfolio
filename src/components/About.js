import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
        <Container className="home" id="home" maxWidth="sm">
            {/* About Me Section */}
            <Row className="home-header mb-4">
                <Col>
                    <h1>About Me</h1>
                </Col>
            </Row>

            {/* Work Experiences Section */}
            <Row className="mb-4">
                <Col md={4} className="border-right pr-3">
                    <h2>Work Experiences</h2>
                </Col>
                <Col md={8}>
                    <Row>
                        <h3>Machine Learning Engineer</h3>
                        <h4>Appman</h4>
                        <p>Do this</p>
                    </Row>
                    <Row>
                        <h3>Applicant of Super AI Engineer</h3>
                        <h4>Toyata</h4>
                        <p>Do this</p>
                    </Row>
                    <Row>
                        <h3>Software Engineer</h3>
                        <h4>Toyata</h4>
                        <p>Do this</p>
                    </Row>
                </Col>
            </Row>

            {/* Education Section */}
            <Row className="mb-4">
                <Col md={8}>
                    <Row>
                        <h3>The University of Sydney</h3>
                        <p>Master of Computer Science, 2024</p>
                    </Row>
                    <Row>
                        <h3>Chiang Mai University</h3>
                        <p>Bachelor of Electrical Engineer, 2020</p>
                    </Row>
                </Col>
                <Col md={4} className="border-left pl-3">
                    <h2>Education</h2>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
