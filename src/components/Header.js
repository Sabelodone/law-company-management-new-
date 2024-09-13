import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Modal, Tab, Nav as BootstrapNav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaUser } from 'react-icons/fa';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('profile'); // Default to profile tab

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    return (
        <>
            <Navbar bg="light" expand="lg" className="mb-4 shadow-sm px-3">
                <Navbar.Brand as={Link} to="/" className="font-weight-bold text-indigo">
                    LawFirm
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-lg-auto mt-3 mt-lg-0 d-flex align-items-center">
                        <FaSearch className="mr-2 text-indigo" />
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2 border-radius-0"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Button variant="outline-indigo" className="ml-2">
                            <FaFilter />
                        </Button>
                    </Form>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="text-indigo">Dashboard</Nav.Link>
                        <Nav.Link onClick={handleShow} className="text-indigo">
                            <FaUser size={20} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* User Profile Modal */}
            <Modal show={showModal} onHide={handleClose} className="luxury-modal">
                <Modal.Header closeButton>
                    <Modal.Title className="text-indigo">User Options</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tab.Container id="left-tabs-example" activeKey={activeTab}>
                        <BootstrapNav variant="tabs">
                            <BootstrapNav.Item>
                                <BootstrapNav.Link eventKey="profile" onClick={() => setActiveTab('profile')}>
                                    Profile
                                </BootstrapNav.Link>
                            </BootstrapNav.Item>
                            <BootstrapNav.Item>
                                <BootstrapNav.Link eventKey="settings" onClick={() => setActiveTab('settings')}>
                                    Settings
                                </BootstrapNav.Link>
                            </BootstrapNav.Item>
                            <BootstrapNav.Item>
                                <BootstrapNav.Link eventKey="logout" onClick={() => setActiveTab('logout')}>
                                    Logout
                                </BootstrapNav.Link>
                            </BootstrapNav.Item>
                        </BootstrapNav>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="profile">
                                <div className="text-center">
                                    <img
                                        src="https://via.placeholder.com/100"
                                        alt="User Profile"
                                        className="rounded-circle mb-3"
                                    />
                                    <h5>User Name</h5>
                                    <p>Email: user@example.com</p>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="settings">
                                <Form>
                                    <Form.Group controlId="formUsername">
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" placeholder="Enter username" />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Save Changes
                                    </Button>
                                </Form>
                            </Tab.Pane>
                            <Tab.Pane eventKey="logout">
                                <p>Are you sure you want to log out?</p>
                                <Button variant="danger" onClick={() => console.log('Logged out')}>
                                    Logout
                                </Button>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Header;
