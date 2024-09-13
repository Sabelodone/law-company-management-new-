import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Welcome.css'; // Import custom styles for Welcome component

function Welcome() {
  return (
    <Container fluid className="welcome-container d-flex align-items-center justify-content-center">
      <div className="welcome-content text-center">
        <h1 className="welcome-title">Welcome to the Management System</h1>
        <p className="welcome-text">
          Manage your cases, tasks, clients, and documents with ease. Select an option from the sidebar to begin.
        </p>
        <Button href="/dashboard" variant="primary" className="explore-btn">
          Explore Dashboard
        </Button>
      </div>
    </Container>
  );
}

export default Welcome;
