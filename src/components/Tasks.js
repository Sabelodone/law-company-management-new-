import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Tasks.css';
import { Table } from 'react-bootstrap';

const Tasks = () => {
  return (
    <div className="container mt-5">
      <Nav className="mb-4">
        <Nav.Link as={Link} to="/cases" className="text-indigo">Cases</Nav.Link>
       
        <Nav.Link as={Link} to="/time-management" className="text-indigo">Time Management</Nav.Link>
        <Nav.Link as={Link} to="/clients" className="text-indigo">Clients</Nav.Link>
        <Nav.Link as={Link} to="/documents" className="text-indigo">Documents</Nav.Link>
      </Nav>
      <h1 className="mb-4 text-center">Tasks</h1>
      <Table striped bordered hover className="shadow-sm">
        <thead className="bg-primary text-white">
          <tr>
            <th>Task ID</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Review Documents</td>
            <td>In Progress</td>
            <td>2024-08-30</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </Table>
    </div>
  );
};

export default Tasks;
