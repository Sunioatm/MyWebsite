import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import "../index.css"

const skills = [
  { name: 'HTML', rating: 80 },
  { name: 'CSS', rating: 70 },
  { name: 'JavaScript', rating: 90 },
  { name: 'React', rating: 85 },
  { name: 'Bootstrap', rating: 75 },
];

const projects = [
  { title: 'Project 1', description: 'Description of Project 1', image: 'path_to_image_1' },
  { title: 'Project 2', description: 'Description of Project 2', image: 'path_to_image_2' },
];

const Portfolio = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1 className="text-center mt-5 mb-4 font-weight-bold ">My Portfolio</h1>
        </Col>
      </Row>


          <h2>About Me</h2>
          <p className="text-muted">
            Welcome to my portfolio! I'm John Doe, a passionate web developer with expertise in front-end technologies.
            I love creating beautiful and functional websites that provide a great user experience.
          </p>

        
          <h2>Projects</h2>
          <Row>
            {projects.map((project, index) => (
              <Col md={6} key={index} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={project.image} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        
      <Row>
        <Col>
          <h2>Skills</h2>
          {skills.map((skill, index) => (
            <div key={index} className="mb-3">
              <h4>{skill.name}</h4>
              <ProgressBar now={skill.rating} label={`${skill.rating}%`} variant="blue" />
            </div>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Additional Section</h2>
          <p className="text-muted">
            This is an additional section to make the page longer. You can add any content you like here.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;