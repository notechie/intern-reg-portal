import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <h1>Welcome to Volunteer Portal</h1>
    <Link to="/register">Register as Intern/Volunteer</Link> |{" "}
    <Link to="/admin">Admin View</Link>
  </div>
);

export default Home;
