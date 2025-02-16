

// CREATE IF ELSE LOGIC TO DISPLAY TITLE BASED ON URL

import React from 'react';
import { useLocation } from 'react-router-dom';

const Title = () => {
  const location = useLocation();
  let title;

  if (location.home === '/') {
    title = 'Home';
  } else if (location.about === '/about') {
    title = 'About Us';
  } else if (location.contact === '/contact') {
    title = 'Contact';
  } else if (location.projects === '/projects') {
        title = 'Projects';
  } else {
    title = 'Page Not Found';
  }

  return <h1>{title}</h1>;
};

export default Title;