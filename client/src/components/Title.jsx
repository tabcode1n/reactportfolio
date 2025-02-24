// // CREATE IF ELSE LOGIC TO DISPLAY TITLE BASED ON URL

import React from 'react';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import "../App.css";

const Title = ({ className = 'page-title' }) => {
  const location = useLocation();
  let titleText;

  if (location.pathname === '/') {
    titleText = 'TABITHA ROOST';
  } else if (location.pathname === '/about') {
    titleText = 'PROFESSIONAL SUMMARY';
  } else if (location.pathname === '/contact') {
    titleText = 'CONTACT INFO';
  } else if (location.pathname === '/projects') {
    titleText = 'COMPLETED PROJECTS';
  } else {
    titleText = 'NOT FOUND';
  }

  const words = titleText.split(' ');
  
  return (
    <h1 className={`title ${className}`} style={{ marginTop: '100px' }}>
      <div 
        className="transition-all duration-300 text-blue-500 shadow-lg shadow-blue-500/20"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
      >
        <span>
          {words[0]}
        </span>
        <span style={{ marginLeft: `${words[0].length}ch` }}>
          {words[1]}
        </span>
      </div>
    </h1>
  );
};

Title.propTypes = {

  
  className: PropTypes.string
};

export default Title;