import * as React from 'react';
import { useState, useEffect } from 'react';
import { Application } from './ApplicationForm';

const Applications: React.FC = () => {
  const [applications, setApplications] = useState<Application[]>([]);

  useEffect(() => {
    const storedApps = localStorage.getItem('applications');
    if (storedApps) {
      setApplications(JSON.parse(storedApps));
    }
  }, []);

  return (
    <div className="applications-page">
      <h2>Applications</h2>
      {applications.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <ul className="applications-list">
          {applications.map((app) => (
            <li key={app.id} className="application-item">
              <strong>{app.company}</strong> — {app.jobTitle} — {app.status} (Applied: {app.dateApplied})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Applications;