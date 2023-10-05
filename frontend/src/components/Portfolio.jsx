import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import "../index.css";
import "./portfolio.css"; // Import the external CSS file

const skills = [
  { name: 'ChatGPT', rating: 101 },
  { name: 'Python', rating: 85 },
  { name: 'JavaScript', rating: 70 },
  { name: 'Java', rating: 65 },
  { name: 'R', rating: 60 },
];

const projects = [
  {
    title: 'This website',
    description: `I made this website along with tutorial and <br>host it on Amazon Elastic Compute Cloud or Amazon EC2.<br>`,
    url: 'http://13.230.190.117/',
    image: 'path_to_image_1',
  },
  {
    title: '2D Java Game',
    description: `I made this 2d game for a term project for ProgTech subject.<br>
    Check it out <a target="_blank" rel="noopener noreferrer className="no-underline"> : My GitHub</a>`,
    url: 'https://github.com/Sunioatm/ProgTech-Project-Java2dGame.git',
    image: 'path_to_image_2',
  },
];

const certificates = [
  {
    title: "",
    description: "",
    url:  "",
    images: "",
  }
]

const Portfolio = () => {
  const skillsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      skillsRef.current.forEach((skillRef) => {
        const skillElement = skillRef.current;
        const skillOffsetTop = skillElement.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollOffset = window.pageYOffset;

        if (scrollOffset > skillOffsetTop - windowHeight + 100) {
          const skillRating = parseInt(skillElement.getAttribute('data-rating'));
          const skillProgress = skillElement.querySelector('.progress-bar');
          skillProgress.style.width = `${skillRating}%`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container className="portfolio">
      <Row>
        <Col>
          <h1 className="mt-5 mb-4 font-weight-bold">My Portfolio</h1>
        </Col>
      </Row>

      <h2>About Myself</h2>
      <p className="text-muted">
        Welcome to my portfolio!<br />
        My name is Siwakorn Sangiammahasal. I'm a Chulalongkorn University student that just finished the second year with GPAX: 3.25.<br />
        I am a learner web developer with MERN stack.<br />
        I love to learn about making APIs and data analytics.<br />
        <p className="light-gray">Honestly, I love learning mathematics the most, but I don't want to be a teacher.</p>
      </p>

      <h2>Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} key={index} className="mb-4 mt-4">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className='no-underline'>
              <Card className="project-card" >
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{ __html: project.description }} className='project-card-description'></Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      <h2>Certificates</h2>
      <Row>
        {certificates.map((certificate, index) => (
          <Col md={6} key={index} className="mb-4 mt-4">
            <a href={certificate.url} target="_blank" rel="noopener noreferrer" className='no-underline'>
              <Card className="certificate-card" >
                <Card.Body>
                  <Card.Title>{certificate.title}</Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{ __html: certificate.description }} className='certificate-card-description'></Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      <Row>
        <Col>
          <h2>Skills</h2>
          {skills.map((skill, index) => {
            const skillRef = useRef(null);
            skillsRef.current[index] = skillRef;

            return (
              <div key={index} className="mb-3 mt-4" ref={skillRef} data-rating={skill.rating}>
                <h4>{skill.name}</h4>
                <div className="skills-bar">
                  <ProgressBar now={0} label={`${skill.rating}%`} variant="blue" />
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
