import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Clients.css'; // Custom CSS for additional styling
import { Table } from 'react-bootstrap';

const Clients = () => {
  return (
    <div className="container mt-5 clients-container">
      <Nav className="mb-4">
        <Nav.Link as={Link} to="/cases" className="text-indigo">Cases</Nav.Link>
        <Nav.Link as={Link} to="/tasks" className="text-indigo">Tasks</Nav.Link>
        <Nav.Link as={Link} to="/time-management" className="text-indigo">Time Management</Nav.Link>
        
        <Nav.Link as={Link} to="/documents" className="text-indigo">Documents</Nav.Link>
      </Nav>
      <h1 className="mb-4 text-center">Client Management</h1>
      <div className="table-responsive">
        <Table striped bordered hover className="custom-table">
          <thead>
            <tr>
              <th>Client ID</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Cases</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>johndoe@example.com</td>
              <td>5</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Clients;
