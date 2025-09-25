import { Container, Row, Col } from 'react-bootstrap';

function Skills() {
    return (
        <section id="skills" className="bg-light">
            <Container>
                <div className="text-center">
                    <h2 className="display-5">My Tech Stack</h2>
                    <p className="lead text-muted">Technologies I work with to build my projects.</p>
                </div>
                <Row className="text-center mt-4">
                    <Col md={4} className="mb-3"><h5>Languages</h5><p>JavaScript (ES6+)</p></Col>
                    <Col md={4} className="mb-3"><h5>Front-End</h5><p>React.js, HTML5, CSS3, Bootstrap</p></Col>
                    <Col md={4} className="mb-3"><h5>Back-End</h5><p>Node.js, Express.js</p></Col>
                    {/* <Col md={6} className="mb-3"><h5>Databases</h5><p>MongoDB</p></Col> */}
                    <Col md={6} className="mb-3"><h5>Tools & Platforms</h5><p>Git, GitHub, VS Code, MS Office</p></Col>
                </Row>
            </Container>
        </section>
    );
}
export default Skills;