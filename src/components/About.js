import { Container, Row, Col } from "react-bootstrap";
import { CiMedal } from "react-icons/ci";
import { MdOutlineWork } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";

function About() {
    return (
        <Container className="home" id="home" maxWidth="sm">
            {/* About Me Section */}
            <Row className="home-header mb-5">
                <Col>
                    <h1>About Me</h1>
                </Col>
            </Row>

            {/* Work Experiences Section */}
            <Row className="work-section">
                <Col md={4} className="border-right pr-3">
                    <h2>Work Experiences <MdOutlineWork /></h2>
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
                    <Row>
                        <h3>Test Development Engineer</h3>
                        <h4>Toyata</h4>
                        <p>Do this</p>
                    </Row>

                </Col>
            </Row>

            {/* Education Section */}
            <Row className="education-section">
                <Col md={8}>
                    <div className="education-item">
                        <h3>The University of Sydney</h3>
                        <p>Master of Computer Science, <b>2024 - Present</b></p>
                        <p>AVG WAM: 85.5</p>
                    </div>

                    <div className="education-item">
                        <h3>Chiang Mai University</h3>
                        <p>Bachelor of Electrical Engineering, <b>2016 - 2020</b></p>
                        <p>First Class Honour <CiMedal color="gold" /></p>
                        <p>GPA: 3.93 / 4.00</p>
                    </div>
                </Col>
                <Col md={4} className="border-left pl-3">
                    <h2>Education <GiOpenBook /></h2>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
