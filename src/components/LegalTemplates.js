import React, { useState } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './LegalTemplates.css'; // Ensure to import the CSS file

const templates = [
  {
    id: 1,
    name: 'Contract Agreement',
    fields: [
      { label: 'Party A Name', type: 'text', name: 'partyA' },
      { label: 'Party B Name', type: 'text', name: 'partyB' },
      { label: 'Contract Date', type: 'date', name: 'contractDate' },
      { label: 'Is this contract renewable?', type: 'checkbox', name: 'isRenewable' }
    ]
  },
  {
    id: 2,
    name: 'Non-Disclosure Agreement (NDA)',
    fields: [
      { label: 'Disclosing Party', type: 'text', name: 'disclosingParty' },
      { label: 'Receiving Party', type: 'text', name: 'receivingParty' },
      { label: 'Effective Date', type: 'date', name: 'effectiveDate' },
      { label: 'Confidentiality Duration (Years)', type: 'number', name: 'confidentialityDuration' }
    ]
  },
  {
    id: 3,
    name: 'Power of Attorney',
    fields: [
      { label: 'Principal Name', type: 'text', name: 'principal' },
      { label: 'Agent Name', type: 'text', name: 'agent' },
      { label: 'Effective Until', type: 'date', name: 'effectiveUntil' },
      { label: 'Agent Authority', type: 'textarea', name: 'agentAuthority' }
    ]
  },
  {
    id: 4,
    name: 'Affidavit',
    fields: [
      { label: 'Affiant Name', type: 'text', name: 'affiant' },
      { label: 'Date Signed', type: 'date', name: 'dateSigned' },
      { label: 'Has this affidavit been notarized?', type: 'radio', name: 'notarized', options: ['Yes', 'No'] }
    ]
  }
];

const LegalTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({});

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Document created successfully!');
  };

  return (
    <div className="legal-templates">
      <div className="sidebar">
        <h2>Legal Document Templates</h2>
        <div className="template-list">
          {templates.map(template => (
            <Card key={template.id} className="template-card mb-4">
              <Card.Body>
                <Card.Title>{template.name}</Card.Title>
                <Button variant="primary" onClick={() => handleTemplateSelect(template)}>
                  Create {template.name}
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      <div className="content">
        {selectedTemplate && (
          <div className="mt-5">
            <h3>Create {selectedTemplate.name}</h3>
            <Form onSubmit={handleSubmit}>
              {selectedTemplate.fields.map((field, index) => (
                <Form.Group key={index} className="mb-3">
                  <Form.Label>{field.label}</Form.Label>
                  {field.type === 'textarea' ? (
                    <Form.Control
                      as="textarea"
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={handleInputChange}
                      required
                    />
                  ) : field.type === 'radio' ? (
                    field.options.map((option, i) => (
                      <Form.Check
                        key={i}
                        type="radio"
                        label={option}
                        name={field.name}
                        value={option}
                        checked={formData[field.name] === option}
                        onChange={handleInputChange}
                        required
                      />
                    ))
                  ) : (
                    <Form.Control
                      type={field.type}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={handleInputChange}
                      required
                    />
                  )}
                </Form.Group>
              ))}
              <Button type="submit">Submit</Button>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
};

export default LegalTemplates;
