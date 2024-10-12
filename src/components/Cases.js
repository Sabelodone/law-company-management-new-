// Cases.js

import React, { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cases.css'; // Custom CSS for additional styling
import { Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate
import axios from 'axios';

const Cases = () => {
  const [cases, setCases] = useState([]);
  const navigate = useNavigate(); // Updated to useNavigate

  // Fetch cases from the backend
  useEffect(() => {
    console.log('Fetching cases from the backend...');
    axios.get('http://127.0.0.1:5000/api/cases') // Assuming this route fetches all cases
      .then(response => {
        console.log('Cases fetched successfully:', response.data);
        setCases(response.data);
      })
      .catch(error => {
        console.error('Error fetching cases:', error);
      });
  }, []);

  // Redirect to the CreateCase page
  const goToCreateCase = () => {
    console.log('Navigating to create a new case...');
    navigate('/create-case'); // Updated to useNavigate
  };

  return (
    <div className="container mt-5 cases-container">
      <Nav className="mb-4">
        <Nav.Link as={Link} to="/tasks" className="text-indigo">Tasks</Nav.Link>
        <Nav.Link as={Link} to="/time-management" className="text-indigo">Time Management</Nav.Link>
        <Nav.Link as={Link} to="/clients" className="text-indigo">Clients</Nav.Link>
        <Nav.Link as={Link} to="/documents" className="text-indigo">Documents</Nav.Link>
      </Nav>

      <h1 className="mb-4 text-center">Case Management</h1>

      <div className="d-flex justify-content-between mb-3">
        <Button variant="primary" onClick={goToCreateCase}>Create New Case</Button>
      </div>

      <div className="table-responsive">
        <Table striped bordered hover className="custom-table">
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status ID</th>
              <th>Category ID</th>
              <th>Law Firm ID</th>
              <th>Created At</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((caseItem, index) => (
              <tr key={index}>
                <td>{caseItem.id}</td>
                <td>{caseItem.title}</td>
                <td>{caseItem.description}</td>
                <td>{caseItem.status_id}</td>
                <td>{caseItem.category_id}</td>
                <td>{caseItem.lawfirm_id}</td>
                <td>{new Date(caseItem.created_at).toLocaleDateString()}</td>
                <td>{new Date(caseItem.last_updated).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Cases;

