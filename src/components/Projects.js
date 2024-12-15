import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import machineTranslation from "../Assets/projects/mt-nlp.png"
import ollama from "../Assets/projects/ollama.png"
import inkball from "../Assets/projects/inkball.png"

function Projects() {
    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    My Recent <strong>Projects </strong>
                </h1>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ollama}
                            isBlog={false}
                            title="Chat Assistant"
                            description="Developed ChatGPT-like website that has an ollama as a backend. The hardest part is how to stream the response on the website using flask. The project aims to develop the vector database to create a RAG system."
                            ghLink="https://github.com/ChanchakornP/Chat"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={inkball}
                            isBlog={false}
                            title="Inkball Game"
                            description="An Inkball game developed in Java and built with Gradle, designed following object-oriented-programming (OOP) principles."
                            ghLink="https://github.com/ChanchakornP/myInkball"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={machineTranslation}
                            isBlog={false}
                            title="Machine Translation TH-EN"
                            description="A transformer model translates Thai sentences to English, and vice versa. The model is trained with open source data such as Thai Wiki, Open Corpus, and Ted Talk. The model is available on Huggingface."
                            ghLink="https://github.com/ChanchakornP/Machine-Translation-Flask-App"
                            demoLink="https://huggingface.co/ChanP/finetuned-th-to-en"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
