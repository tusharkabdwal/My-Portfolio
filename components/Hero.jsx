import React from 'react';
import { Container, Button } from 'react-bootstrap';

function Hero() {
  return (
    <header className="hero-section" id="home">
      <Container>
        <h1 className="display-3">Tushar Kabdwal</h1>
        <h3 className="fw-light mb-4">Full-Stack Web Developer | Haldwani, Uttarakhand</h3>
        <p className="lead col-lg-6 mx-auto">
          I am a passionate B.Tech CSE student specializing in the MERN stack, building robust and scalable web applications. I'm actively seeking an opportunity to kickstart my professional career.
        </p>
        <Button href="/Tushar_Kabdwal_Resume.pdf" target="_blank" variant="primary" size="lg" className="mt-3">
          View My Resume
        </Button>
      </Container>
    </header>
  );
}

export default Hero;