import { Container, Image, Row, Col } from "react-bootstrap";
import resume from "../Assets/certificates/resume.png"
function Resume() {
    return (<Container>
        <Image src={resume} style={{
            'display': 'block',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'width': '50%',
            'margin-top': '100px',
            'margin-bottom': '100px'
        }} />
    </Container>)
}

export default Resume;