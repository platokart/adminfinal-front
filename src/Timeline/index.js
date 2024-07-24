// src/Timeline.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './index.css';



const Timeline = () => {
  const timelineData = [
    {
      date: 'June 18th, 2024',
      title: 'Project Kickoff',
      description: 'Initial project kickoff meeting with all stakeholders.',
    },
    {
      date: 'June 23rd, 2024',
      title: 'Requirement Gathering',
      description: 'Gathering all necessary requirements from the client.',
    },
    {
      date: 'July 3rd, 2024',
      title: 'Design Phase',
      description: 'Starting the design phase of the project.',
    },
    { 
      date: '2024-07-15',
      title: 'Development Phase',
      description: 'Starting the development phase of the project.',
    },
    { 
      date: '2024-08-01',
      title: 'Testing Phase',
      description: 'Starting the testing phase of the project.', 
    },
    {
      date: '2024-08-15', 
      title: 'Deployment',
      description: 'Starting the deployment phase of the project.', 
    },
  ];
  return (
    <Container className="timeline">
      <h3 className="text-center mb-4">Project Timeline</h3>
      {timelineData.map((item, index) => (
        <Row key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <Col md={{ span: 5, offset: index % 2 === 0 ? 0 : 7 }}>
            <Card className="timeline-card">
              <div>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className="mb-2 text-muted">{item.date}</Card.Text>
                <Card.Text>{item.description}</Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Timeline;
