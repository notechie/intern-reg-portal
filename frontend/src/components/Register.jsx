import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    skills: '',
    why: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/applicant', form);
      alert("Registration successful!");
      setForm({ name: '', email: '', phone: '', skills: '', why: '' });
    } catch (err) {
      alert("Error submitting form.");
      console.error(err);
    }
  };

  return (
    <div className="register-container">
      <h2>Register as Intern/Volunteer</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} value={form.name} required />
        <input name="email" placeholder="Email" onChange={handleChange} value={form.email} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} value={form.phone} required />
        <input name="skills" placeholder="Skills" onChange={handleChange} value={form.skills} />
        <textarea name="why" placeholder="Why do you want to join?" onChange={handleChange} value={form.why} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;


