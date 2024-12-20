import { Container, Row, Col, Image } from "react-bootstrap";
import homeLogo from "../Assets/home-main.svg"
import TypingAnimation from "./TypingAnimation";
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3, IoLogoPython, IoLogoDocker } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { SiPostgresql, SiHuggingface, SiPytorch, SiPandas, SiNumpy, SiOpencv, SiKubernetes } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import Card from 'react-bootstrap/Card';
import { useTheme } from "../ThemeContext";
import ListGroup from 'react-bootstrap/ListGroup';

function Home() {
    const { theme, toggleTheme } = useTheme();

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

                    <TypingAnimation strings={[
                        'Computer Science Student',
                        'Machine Learning Engineer',
                        'Electrical Engineer'
                    ]}
                    ></TypingAnimation>

                </Col>

                <Col md={4} style={{ paddingBottom: 20 }}>
                    <img
                        src={homeLogo}
                        alt="home pic"
                        className="img-fluid"
                        style={{
                            maxHeight: "450px",
                            'margin-top': '100px',
                        }}
                    />
                </Col>
            </Row>
            <Row>
                <Container className="tech-stack-section my-5">
                    <h2 className="text-center mb-4">My Tech Stack</h2>
                    <Row className="mb-4">
                        <Col md={4}>
                            <Card
                                bg={theme === 'dark' ? 'dark' : 'white'}
                                key={'dark'}
                                text={theme === 'light' ? 'dark' : 'white'}
                                style={{ width: '18rem' }}
                                className="mb-2 project-card-view"
                            >
                                <Card.Header>Programming Languages</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Python <IoLogoPython /></ListGroup.Item>
                                            <ListGroup.Item>Java <FaJava /></ListGroup.Item>
                                            <ListGroup.Item>JavaScript <IoLogoJavascript /></ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card
                                bg={theme === 'dark' ? 'dark' : 'white'}
                                key={'dark'}
                                text={theme === 'light' ? 'dark' : 'white'}
                                style={{ width: '18rem' }}
                                className="mb-2 project-card-view"
                            >
                                <Card.Header>Frontend Development</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>HTML</ListGroup.Item>
                                            <ListGroup.Item>CSS</ListGroup.Item>
                                            <ListGroup.Item>React</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card
                                bg={theme === 'dark' ? 'dark' : 'white'}
                                key={'dark'}
                                text={theme === 'light' ? 'dark' : 'white'}
                                style={{ width: '18rem' }}
                                className="mb-2 project-card-view"
                            >
                                <Card.Header>Data Science & Machine Learning</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>PyTorch</ListGroup.Item>
                                            <ListGroup.Item>Pandas</ListGroup.Item>
                                            <ListGroup.Item>NumPy</ListGroup.Item>
                                            <ListGroup.Item>Matplotlib</ListGroup.Item>
                                            <ListGroup.Item>Seaborn</ListGroup.Item>
                                            <ListGroup.Item>scikit-learn</ListGroup.Item>
                                            <ListGroup.Item>ChromaDB</ListGroup.Item>
                                            <ListGroup.Item>OpenCV</ListGroup.Item>

                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <Card
                                bg={theme === 'dark' ? 'dark' : 'white'}
                                key={'dark'}
                                text={theme === 'light' ? 'dark' : 'white'}
                                style={{ width: '18rem' }}
                                className="mb-2 project-card-view"
                            >
                                <Card.Header>Backend Development & Databases</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>FastAPI</ListGroup.Item>
                                            <ListGroup.Item>Flask</ListGroup.Item>
                                            <ListGroup.Item>Locust</ListGroup.Item>
                                            <ListGroup.Item>SQL</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card
                                bg={theme === 'dark' ? 'dark' : 'white'}
                                key={'dark'}
                                text={theme === 'light' ? 'dark' : 'white'}
                                style={{ width: '18rem' }}
                                className="mb-2 project-card-view"
                            >
                                <Card.Header>DevOps & Cloud Tools</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Docker</ListGroup.Item>
                                            <ListGroup.Item>Argo</ListGroup.Item>
                                            <ListGroup.Item>Kubernetes</ListGroup.Item>
                                            <ListGroup.Item>Kubeflow</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4}>
                            <Card
                                bg={theme === 'dark' ? 'dark' : 'white'}
                                key={'dark'}
                                text={theme === 'light' ? 'dark' : 'white'}
                                style={{ width: '18rem' }}
                                className="mb-2 project-card-view"
                            >
                                <Card.Header>Tools & Operating Systems</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Git</ListGroup.Item>
                                            <ListGroup.Item>Jira</ListGroup.Item>
                                            <ListGroup.Item>Linux</ListGroup.Item>
                                            <ListGroup.Item>Matlab</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </Container>
    )
}

export default Home;