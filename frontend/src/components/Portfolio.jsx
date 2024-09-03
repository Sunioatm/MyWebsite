import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import "../index.css";
import "./portfolio.css"; // Import the external CSS file
import TodoBackend from "../assets/certificates/TodoBackend.jpg"
import DevOps from "../assets/certificates/DevOps.jpg"
import Pentest from "../assets/certificates/Pentest.jpg"

const skills = [
  { name: 'ChatGPT', rating: 101 },
  { name: 'Python', rating: 75 },
  { name: 'JavaScript', rating: 75 },
  { name: "Go", rating:70},
  { name: 'Java', rating: 65 },
  { name: 'R', rating: 65 },
];

const projects = [
  {
    title: 'This website',
    description: `This is my website using React on frontend and NodeJS on Backend.<br> And host it on Firebase.`,
    url: "",
    image: 'path_to_image_1',
  },
  {
    title: '2D Java Game',
    description: `I made this 2d game for a term project for ProgTech subject.<br>`,
    url: 'https://github.com/Sunioatm/ProgTech-Project-Java2dGame.git',
    image: 'path_to_image_2',
  },
  {
    title: "Room Reservation API Project",
    description: "This is a project for internship assignment about making backend API.",
    url: "https://github.com/Sunioatm/RoomReservation-API_Project",
    image: 'path_to_image_3'
  },
  {
    title: "Learn Go Programming",
    description: "This is go programming for backend",
    url:"https://github.com/Sunioatm/Learn-GoProgramming",
    image: 'path_to_image_4'
  }
];

const certificates = [
  {
    title: "Todo Backend",
    description: "",
    url:  "",
    images: TodoBackend
  },
  {
    title: "DevOps",
    description: "",
    url:  "",
    images: DevOps
  },
  {
    title: "Ethical Hacking, Pentesting",
    description: "",
    url:  "",
    images: Pentest
  },
  
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
        My name is Siwakorn Sangiammahasal. I'm a Chulalongkorn University student with GPAX: 3.33.<br />
        I am a learner web developer with MERN stack.<br />
        I'm passionate about building backend APIs, automate tasks with DevOps, and enhance my knowledge in cybersecurity.<br />
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

      <Row>
        <Col>
          <h2>Skills</h2>
          <h5><p>(Ranked according to my confidence)</p></h5>
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

      <h2>Certificates</h2>
      <Row className="certificate-section">
        {certificates.map((certificate, index) => (
          <Col md={6} key={index} className="mb-4 mt-4">
            <a href={certificate.url} target="_blank" rel="noopener noreferrer" className='no-underline'>
              <Card className="certificate-card">
                {certificate.images && <Card.Img variant="top" src={certificate.images} />} {/* Display image if it exists */}
                <Card.Body>
                  <Card.Title>{certificate.title}</Card.Title>
                  <Card.Text dangerouslySetInnerHTML={{ __html: certificate.description }} className='certificate-card-description'></Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

    </Container>
  );
};

export default Portfolio;
