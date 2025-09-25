import { Container, Button } from 'react-bootstrap';

function Contact() {
    return (
        <footer id="contact" className="py-5 text-center">
            <Container>
                <h2 className="display-5">Get In Touch</h2>
                <p className="lead">I'm currently looking for full-time opportunities. My inbox is always open!</p>
                <Button href="mailto:kabdwaltushar297@gmail.com" variant="light" size="lg" className="mt-3">
                    kabdwaltushar297@gmail.com 
                </Button>
                
            </Container>
        </footer>
    );
}
export default Contact;