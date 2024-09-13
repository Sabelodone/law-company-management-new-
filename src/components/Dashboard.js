import React from 'react';
import './Dashboard.css';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, BarElement, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, BarElement, ArcElement);

const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Tasks Completed',
      data: [30, 45, 60, 20, 65, 75],
      borderColor: '#004d40',
      backgroundColor: 'rgba(0, 77, 64, 0.1)',
    },
  ],
};

const pieChartData = {
  labels: ['Cases', 'Tasks', 'Time Management', 'Clients', 'Documents'],
  datasets: [
    {
      label: 'Distribution',
      data: [20, 30, 25, 15, 10],
      backgroundColor: ['#ff6f61', '#00bcd4', '#ffeb3b', '#4caf50', '#9c27b0'],
    },
  ],
};

const barChartData = {
  labels: ['Cases', 'Tasks', 'Clients', 'Documents'],
  datasets: [
    {
      label: 'Cases Closed',
      data: [12, 19, 3, 5],
      backgroundColor: '#004d40',
    },
    {
      label: 'Cases Open',
      data: [8, 12, 6, 9],
      backgroundColor: '#00bcd4',
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Dashboard</h1>
      <Row>
        <Col md={4} className="mb-4">
          <Link to="/cases" className="text-decoration-none">
            <Card className="shadow-lg border-0">
              <Card.Body>
                <Card.Title className="text-primary">Cases Overview</Card.Title>
                <Line data={lineChartData} />
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title className="text-primary">Distribution Overview</Card.Title>
              <Pie data={pieChartData} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="shadow-lg border-0">
            <Card.Body>
              <Card.Title className="text-primary">Cases Status</Card.Title>
              <Bar data={barChartData} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* AI Chatbot Icon */}
      <div className="chatbot-icon">
        <FontAwesomeIcon icon={faRobot} size="2x" />
      </div>
    </div>
  );
};

export default Dashboard;
