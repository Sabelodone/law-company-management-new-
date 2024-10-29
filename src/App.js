// App.js


import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faBriefcase, faTasks, faClock, faUsers, faRobot } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Cases from './components/Cases';
import Tasks from './components/Tasks';
import TimeManagement from './components/TimeManagement';
import Clients from './components/Clients';
import DocumentManagement from './components/DocumentManagement';
import LegalTemplates from './components/LegalTemplates';
import Welcome from './components/Welcome';
import CreateCase from './components/CreateCase'; // Import the CreateCase component
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Container fluid className="app-container">
        <Row>
          {/* Sidebar */}
          <Col md={2} className="sidebar d-flex flex-column justify-content-between p-4">
            <Nav className="flex-column">
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={faHome} className="me-2" /> Dashboard
              </NavLink>
              <NavLink
                to="/cases"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={faBriefcase} className="me-2" /> Cases
              </NavLink>
              <NavLink
                to="/tasks"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={faTasks} className="me-2" /> Tasks
              </NavLink>
              <NavLink
                to="/time-management"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={faClock} className="me-2" /> Time Management
              </NavLink>
              <NavLink
                to="/clients"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={faUsers} className="me-2" /> Clients
              </NavLink>
              <NavLink
                to="/document-management"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Document Management
              </NavLink>
              <NavLink
                to="/legal-templates"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                <FontAwesomeIcon icon={faFileAlt} className="me-2" /> Templates
              </NavLink>
            </Nav>
          </Col>

          {/* Main Content Area */}
          <Col md={10} className="content-area p-4">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cases" element={<Cases />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/time-management" element={<TimeManagement />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/document-management" element={<DocumentManagement />} />
              <Route path="/legal-templates" element={<LegalTemplates />} />
              <Route path="/create-case" element={<CreateCase />} /> {/* CreateCase route */}
            </Routes>
          </Col>
        </Row>
      </Container>
      <Footer />

      {/* AI Chatbot Icon */}
      <div className="chatbot-icon">
        <FontAwesomeIcon icon={faRobot} size="2x" />
      </div>
    </Router>
  );
}

export default App;

