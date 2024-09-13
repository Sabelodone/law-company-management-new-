import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cases.css'; // Custom CSS for additional styling
import { Table } from 'react-bootstrap';

const Cases = () => {
  // Initial table data
  const [cases, setCases] = useState([
    { id: 123, client: 'John Doe', status: 'Open', date: '2024-08-22' },
    // Add more initial rows as needed
  ]);

  // Handle cell change
  const handleInputChange = (index, key, value) => {
    const updatedCases = [...cases];
    updatedCases[index][key] = value;
    setCases(updatedCases);
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
      <div className="table-responsive">
        <Table striped bordered hover className="custom-table">
          <thead>
            <tr>
              <th>Case ID</th>
              <th>Client</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((caseItem, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={caseItem.id}
                    onChange={(e) => handleInputChange(index, 'id', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={caseItem.client}
                    onChange={(e) => handleInputChange(index, 'client', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={caseItem.status}
                    onChange={(e) => handleInputChange(index, 'status', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={caseItem.date}
                    onChange={(e) => handleInputChange(index, 'date', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
   
  
  );
};

export default Cases;
