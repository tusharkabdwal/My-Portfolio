import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projectData = [ 
  {
    title: "Project Name 1",
    description: "TodoApp is a web-based to-do list application. It allows users to create, view, possibly update and delete tasks (todos). The primary goal is to help users keep track of things they need to do, organise their tasks, and mark them as completed when done.",
    techStack: "React.js",
    liveLink: "https://tusharkabdwal.github.io/todo-app/",
  },

   {
    title: "Project Name 2",
    description: "In process",
    techStack: "",
    liveLink: "",
  },

  
];

function Projects() {
  return (
    <section id="projects" className="bg-light">
      <Container>
        <div className="text-center">
          <h2 className="display-5">My Projects</h2>
          <p className="lead text-muted">A selection of my work. More on my GitHub.</p> <a href ="https://github.com/tusharkabdwal">GitHub</a>
        </div>
        <Row className="mt-4 g-4">
          {projectData.map((project, index) => (
            <Col lg={6} key={index}>
              <Card className="h-100 shadow-sm project-card">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <p><strong>Tech Stack:</strong> {project.techStack}</p>
                </Card.Body>
                <Card.Footer className="bg-white border-0">
                  <Button href={project.liveLink} variant="outline-primary" className="me-2">Live Demo</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;