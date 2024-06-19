import React from 'react';
import AboutBack from "../assets/aboutbackground.jpeg";
import "../styles/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${AboutBack})` }}>
        ABOUT US
      </div>
      <div className='aboutContent'>
        <div className='aboutSection'>
          <h2>Our Mission</h2>
          <p>We want to become one of the most popular and admired games by reaching an international competence.</p>
        </div>
        <div className='aboutSection'>
          <h2>Our Team</h2>
          <p>We are a team of two and each of us is quite ambitious. We will continue to work and increase the number of our team in order to provide the best quality experience for you!</p>
        </div>
        <div className='aboutSection'>
          <h2>Active Servers</h2>
          <p>Turkey</p>
        </div>
        <div className='aboutSection'>
          <h2>Tournament</h2>
          <p>Our tournament is starting soon, book your place and show your strength to win the big prize!</p>
          <Link to="/Contact">
            <button>Make a request!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
