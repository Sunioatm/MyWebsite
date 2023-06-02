import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import "../index.css"

const skills = [
  { name: 'ChatGPT', rating: 101},
  { name: 'Python', rating: 75 },
  { name: 'JavaScript', rating: 70 },
  { name: 'Java', rating: 70 },
  { name : "R", rating: 60},
  
];

const projects = [
  { title: 'This website', description: `I made this website along with tutorial and <br>host
   it on Amazon Elastic Compute Cloud or Amazon EC2.<br>
   <a href="http://13.230.190.117/">http://13.230.190.117/ </a> <br>
   I just don't know how to make domain name haha.`, image: 'path_to_image_1' },
  { title: '2D Java Game', description: `I made this 2d game for term project for ProgTech subject.<br>
  Check it out <a target=_blank href="https://github.com/Sunioatm/ProgTech-Project-Java2dGame.git"</a> My github`, image: 'path_to_image_2' },
];

const Portfolio = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1 className="text-center mt-5 mb-4 font-weight-bold ">My Portfolio</h1>
        </Col>
      </Row>


          <h2>About Myself</h2>
          <p className="text-muted">
            Welcome to my portfolio!<br></br> My name is Siwakorn Sangiammahasal. I'm a Chulalongkorn University student that just finish the second year with GPAX : 3.25<br></br>I am a learner web developer with MERN stack. <br></br>
            I love to learn about making API and data analytics.<br></br>
            <p style={{ color: 'lightgray' }}>Honestly I love learning mathematics the most but i don't want to be a teacher.</p>
          </p>

        
          <h2>Projects</h2>
          <Row>
      {projects.map((project, index) => (
        <Col md={6} key={index} className="mb-4 mt-4">
          <Card>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text dangerouslySetInnerHTML={{ __html: project.description }}></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
        
      <Row>
        <Col>
          <h2>Skills</h2>
          {skills.map((skill, index) => (
            <div key={index} className="mb-3 mt-4">
              <h4>{skill.name}</h4>
              <ProgressBar now={skill.rating} label={`${skill.rating}%`} variant="blue" />
            </div>
          ))}
        </Col>
      </Row>
      {/* <Row className="mt-4">
        <Col>
          <h2>Additional Section</h2>
          <p className="text-muted">
            This is an additional section to make the page longer. You can add any content you like here.
          </p>
        </Col>
      </Row> */}
    </Container>
  );
}

export default Portfolio;