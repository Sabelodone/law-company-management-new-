import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useMemo } from 'react';
import './DocumentManagement.css'; // Correct path to component-specific CSS


const DocumentManager = () => {
  const [documents, setDocuments] = useState([]);
  const [caseNumber, setCaseNumber] = useState('');
  const [description, setDescription] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [file, setFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle document upload
  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      // Validate file size and type
      if (file.size > 10 * 1024 * 1024) {
        throw new Error('File is too large. Maximum size is 10MB.');
      }
      if (!['application/pdf', 'image/jpeg', 'image/png'].includes(file.type)) {
        throw new Error('Invalid file type. Only PDF, JPEG, and PNG files are allowed.');
      }

      // Create a new document object
      const newDocument = {
        caseNumber,
        description,
        documentType,
        file,
        fileUrl: URL.createObjectURL(file),
        versions: [{ file, date: new Date(), version: 1 }],
      };

      // Simulate API call to save document (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setDocuments([...documents, newDocument]);
      setCaseNumber('');
      setDescription('');
      setDocumentType('');
      setFile(null);
    } catch (err) {
      console.error(err.message); // Logging the error instead of using state
    }
  };

  // Handle file input
  const handleFileChange = (e) => setFile(e.target.files[0]);

  // Handle adding a new version of an existing document
  const handleAddVersion = async (docIndex, newFile) => {
    const updatedDocuments = [...documents];
    const currentDoc = updatedDocuments[docIndex];
    const newVersion = currentDoc.versions.length + 1;

    currentDoc.versions.push({
      file: newFile,
      date: new Date(),
      version: newVersion,
      fileUrl: URL.createObjectURL(newFile),
    });

    updatedDocuments[docIndex] = currentDoc;
    setDocuments(updatedDocuments);
  };

  // Handle document deletion
  // eslint-disable-next-line no-unused-vars
  const handleDeleteDocument = (docIndex) => {
    // TODO: Implement document deletion
  };

  // Handle document search and filter
  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      return (
        doc.caseNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.documentType.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [documents, searchTerm]);

  return (
    <div className="container my-5 p-4 bg-light rounded shadow-sm">
      <h2 className="mb-4 text-primary border-bottom pb-2">Document Management System</h2>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by case number, description, or type"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"
        />
      </div>

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="mb-5">
        <div className="form-group">
          <label htmlFor="caseNumber">Case Number:</label>
          <input
            type="text"
            id="caseNumber"
            value={caseNumber}
            onChange={(e) => setCaseNumber(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="documentType">Document Type:</label>
          <select
            id="documentType"
            value={documentType}
            onChange={(e) => setDocumentType(e.target.value)}
            className="form-control"
          >
            <option value="">Select Type</option>
            <option value="contract">Contract</option>
            <option value="agreement">Agreement</option>
            <option value="report">Report</option>
            <option value="invoice">Invoice</option>
            <option value="memo">Memo</option>
            <option value="letter">Letter</option>
            <option value="policy">Policy</option>
            <option value="procedure">Procedure</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fileUpload">Upload File:</label>
          <input
            type="file"
            id="fileUpload"
            onChange={handleFileChange}
            className="form-control-file"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Upload Document
        </button>
      </form>

      {/* Document List */}
      <h3 className="mb-3">Uploaded Documents</h3>
      <div className="row">
        {filteredDocuments.length > 0 ? (
          filteredDocuments.map((doc, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">Case Number: {doc.caseNumber}</h5>
                  <p className="card-text"><strong>Description:</strong> {doc.description}</p>
                  <p className="card-text"><strong>Type:</strong> {doc.documentType}</p>
                  <p className="card-text"><strong>Versions:</strong></p>
                  <ul className="list-unstyled">
                    {doc.versions.map((version, vIndex) => (
                      <li key={vIndex}>
                        Version {version.version} - Uploaded on {version.date.toLocaleString()}
                        <a href={version.fileUrl} download className="btn btn-link ml-2">Download</a>
                        
                        {/* Render preview based on file type */}
                        {version.file.type.startsWith('image/') ? (
                          <img src={version.fileUrl} alt="Document Preview" style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }} />
                        ) : version.file.type === 'application/pdf' ? (
                          <iframe src={version.fileUrl} style={{ width: '100%', height: '500px', marginTop: '10px' }} title="PDF Document"></iframe>
                        ) : (
                          <p>No preview available for this file type.</p>
                        )}
                      </li>
                    ))}
                  </ul>
                  <input
                    type="file"
                    onChange={(e) => handleAddVersion(index, e.target.files[0])}
                    className="form-control-file mt-2"
                  />
                  {/* Button to delete document (future implementation) */}
                  <button
                    onClick={() => handleDeleteDocument(index)}
                    className="btn btn-danger mt-2"
                  >
                    Delete Document
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">No documents found.</div>
        )}
      </div>
    </div>
  );
};

export default DocumentManager;
