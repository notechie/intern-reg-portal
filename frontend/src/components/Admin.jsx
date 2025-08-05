import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Admin = () => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    axios.get('https://intern-reg-portal.onrender.com')
      .then(res => setApplicants(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="admin-container">
      <h2>Admin - All Applicants</h2>
      {applicants.length === 0 ? (
        <p>No applicants found.</p>
      ) : (
        applicants.map((a, idx) => (
          <div key={idx} className="applicant-card">
            <strong>{a.name}</strong> | {a.email} | {a.phone} | {a.skills}<br />
            <em>{a.why}</em>
          </div>
        ))
      )}
    </div>
  );
};

export default Admin;


