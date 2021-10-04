import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';

import Menu from './Menu';
import './Navigator.css';

function Navigator({ darkMode, setDarkMode }) {
  const isMobile = useMediaQuery({
    query: '(max-width:600px)',
  });

  return (
    <header>
      <Box
        height="10vh"
        width="100%"
        padding="0 5vw"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex="10"
      >
        <Box display="flex" alignItems="center">
          <Link to="/" id="#" className={darkMode ? 'logo darkMode' : 'logo'}>
            <li>LOGO</li>
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          {!isMobile ? (
            <Menu
              name="navigator"
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          ) : (
            <Menu
              name="toggle"
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              toggle
            />
          )}
        </Box>
      </Box>
    </header>
  );
}

Navigator.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
};

export default Navigator;
