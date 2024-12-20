import { Container, Row, Col } from "react-bootstrap";
import { CiMedal } from "react-icons/ci";
import { MdOutlineWork } from "react-icons/md";
import { GiOpenBook } from "react-icons/gi";
import appmanLogo from "../Assets/appman-logo.png";
import superAILogo from "../Assets/super-ai-logo.jpeg"
import nextyLogo from "../Assets/nexty-logo.webp"
import maximLogo from "../Assets/maxim-logo.jpg"
import cmuLogo from "../Assets/cmu-logo.png"
import usydLogo from "../Assets/usyd-logo.png"
import { PiCertificateFill } from "react-icons/pi";
import deepLearningCert from "../Assets/certificates/deep-learning.png"
import superAICert from "../Assets/certificates/superAI.png"
import superAIKaggle from "../Assets/certificates/superAIKaggle.png"
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
                <Col md={7}>
                    <Row className="work-item">
                        <h3 className="work-header">
                            <span>Machine Learning Engineer</span>
                            <div className="work-logo">
                                <img
                                    src={appmanLogo}
                                    alt="appman logo"
                                    style={{ maxHeight: "200px" }}
                                />
                            </div>
                        </h3>

                        <h4>AppMan Co., Ltd. Thailand</h4>
                        <p>I researched and implemented of advanced OCR technologies, vision and NLP models, significantly
                            improving system accuracy and processing speed. Familiar with large model training by applying
                            accumulative gradient, ZeRO, data and model parallel. Applied RAG to the OCR service and designed
                            backend API to connect to vector database. Developed and maintained scalable pipelines, enhancing
                            system integration and performance. Proficient in utilizing Kubernetes for container orchestration and Argo
                            for managing and deploying machine learning services, ensuring scalable and reliable system deployment.</p>
                    </Row>
                    <Row className="work-item">
                        <h3 className="work-header">
                            <span>Participant at Super AI Engineer</span>
                            <div className="work-logo">
                                <img
                                    src={superAILogo}
                                    alt="super AI logo"
                                    style={{ maxHeight: "100px" }}
                                />
                            </div>
                        </h3>

                        <h4>AIAT</h4>
                        <p>AI Boostcamp hosted by Sirindhorn International Institute of Technology, focusing on data and AI model
                            applications across various domains such as digital signal processing, natural language processing, robotics,
                            image processing, and data science. Engaging weekly intense hackathon events, applying AI techniques to
                            solve real problems.</p>
                    </Row>
                    <Row className="work-item">
                        <h3 className="work-header">
                            <span>Software Engineer</span>
                            <div className="work-logo">
                                <img
                                    src={nextyLogo}
                                    alt="nexty logo"
                                    style={{ maxHeight: "50px" }}
                                />
                            </div>
                        </h3>
                        <h4>Toyota Tsusho Nexty Electronics (Thailand) CO., LTD</h4>
                        <p>Designing and executing comprehensive unit tests (especially read-modify-write) to ensure the reliability and
                            robustness of individual software components. Implementing integration testing strategies to validate the
                            interaction between various software modules in car systems.</p>
                    </Row>
                    <Row className="work-item">
                        <h3 className="work-header">
                            <span>Test Development Engineer</span>
                            <div className="work-logo">
                                <img
                                    src={maximLogo}
                                    alt="maxim logo"
                                    style={{ maxHeight: "75px" }}
                                />
                            </div>
                        </h3>
                        <h4>Maxim Integrated Thailand (Analog Device)</h4>
                        <p>Responsible for testing an impact on wafer by upgrading operation system to enhance the productivity in
                            manufacturing.Conducted statistical data analysis to validate the effectiveness of this change.</p>
                    </Row>
                </Col>
            </Row>

            {/* Education Section */}
            <Row className="education-section">
                <Col md={8}>
                    <div className="education-item">
                        <h3 className="education-header">
                            The University of Sydney
                            <div className="edu-logo">
                                <img
                                    src={usydLogo}
                                    alt="maxim logo"
                                    style={{ maxHeight: "100px" }}
                                />
                            </div>
                        </h3>
                        <p>Master of Computer Science, <b>2024 - Present</b></p>
                        <p>AVG WAM: 85.5</p>
                    </div>

                    <div className="education-item">
                        <h3 className="education-header">
                            Chiang Mai University
                            <div className="edu-logo">
                                <img
                                    src={cmuLogo}
                                    alt="maxim logo"
                                    style={{ maxHeight: "100px" }}
                                />
                            </div>
                        </h3>
                        <p>Bachelor of Electrical Engineering, <b>2016 - 2020</b></p>
                        <p>First Class Honour <CiMedal color="gold" /></p>
                        <p>GPA: 3.93 / 4.00</p>
                    </div>
                </Col>
                <Col md={4} className="border-left pl-3">
                    <h2>Education <GiOpenBook /></h2>
                </Col>
            </Row>
            <Row className="certificate-section">
                <Col md={4} className="border-right pr-3">
                    <h2>Certificate <PiCertificateFill /></h2>
                </Col>
                <Col md={8}>
                    <div className="certificate-item">
                        <h2> Deep Learning Specialist</h2>
                        <img src={deepLearningCert} style={{ maxWidth: "600px" }}></img>
                        <h3> Including courses </h3>
                        <ul>
                            <li>Neural Networks and Deep Learning</li>
                            <li>Improving Deep Neural Networks</li>
                            <li>Structuring Machine Learning Projects</li>
                            <li>Convolution Neural Networks</li>
                            <li>Sequence Models</li>
                        </ul>
                    </div>
                    <div className="certificate-item">
                        <h2> SuperAI Engineer</h2>
                        <img src={superAICert} style={{ maxWidth: "600px" }}></img>
                        <p> AI Boostcamp hosted by Sirindhorn International Institute of Technology, focusing on data and AI model
                            applications across various domains such as digital signal processing, natural language processing, robotics,
                            image processing, and data science. Engaging weekly intense hackathon events, applying AI techniques to
                            solve real problems. </p>
                        <ul>
                            <li>Digit Classification</li>
                            <li>Adaptive Maintainance</li>
                            <li>House Grade Classification</li>
                            <li>Trading Algorithm</li>
                            <li>Named Entity Recognition</li>
                            <li>Thai Food Labeling</li>
                            <li>N-gram model</li>
                        </ul>
                        <p> Here is a ranking for some hackathons.</p>
                        <img src={superAIKaggle} style={{ maxWidth: "600px" }}></img>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
