import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {

  // Scroll effect for navbar background color change
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <nav className="navbar">
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          ISLAMIC LIFE
        </motion.div>
        <ul className="nav-links">
          <li><Link to="/gemini">Chat with AI</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/login">login / logout</Link></li>
          
        </ul>
      </nav>

      <header className="header">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to ISLAMIC LIFE
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Your one-stop solution for AI-powered interactions and resources.
        </motion.p>
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </header>

      <footer className="footer">
        <h4>About Us</h4>
        <p>
          This platform is dedicated to providing accurate and authentic Islamic knowledge through AI-powered assistance. Our goal is to help users explore and understand Islam, guided by verified sources and scholarly input.
        </p>
        <p>&copy; 2025 ISLAMIC LIFE. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
