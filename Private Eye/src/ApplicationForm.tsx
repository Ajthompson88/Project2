import React, { useState } from 'react';

const ApplicationForm: React.FC = () => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');
  const [appliedDate, setAppliedDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newApplication = {
      company,
      position,
      status,
      applied_date: appliedDate, // use the field names expected by your SQL table
    };

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newApplication)
      });

      if (response.ok) {
        alert('Application added successfully!');
        // Clear the form
        setCompany('');
        setPosition('');
        setStatus('');
        setAppliedDate('');
      } else {
        alert('Failed to add application.');
      }
    } catch (error) {
      console.error('Error adding application:', error);
      alert('Error adding application.');
    }
  };

  return (
    <div>
      <h2>Add Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Company:</label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Position:</label>
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Applied Date:</label>
          <input
            type="date"
            value={appliedDate}
            onChange={(e) => setAppliedDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Application</button>
      </form>
    </div>
  );
};

export default ApplicationForm;