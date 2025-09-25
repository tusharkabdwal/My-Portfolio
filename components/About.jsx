import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
  return (
    <section id="about">
      <Container>
        <div className="text-center">
          <h2 className="display-5">About Me</h2>
          <center><p className="lead text-muted">A little bit about my journey and passions.</p>  </center>
        </div>
        <Row className="mt-4 align-items-center">
          <Col md={8}>          {/* Bootstrap grid system prop that control column width on medium-sizes screen and large*/}
            <p>My name is Tushar Kabdwal, and I'm a computer science engineering student from Amrapali University.</p>
          </Col>
          <Col md={4} className="text-center">
            <a href="https://github.com/tusharkabdwal" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/tushar-kabdwal-a96671258" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="bi bi-linkedin"></i></a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default About;