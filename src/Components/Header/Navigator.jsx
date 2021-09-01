import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { Box } from '@material-ui/core';

import Menu from './Menu';
import './Navigator.css';

function Navigator() {
  const isMobile = useMediaQuery({
    query: '(max-width:600px)',
  });

  return (
    <header>
      <Box
        height="10vh"
        width="100%"
        padding="0 5vw"
        position="fixed"
        top="0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex="10"
      >
        <Link to="/" id="#" className="logo">
          <li>Logo</li>
        </Link>
        {!isMobile ? <Menu name="navigator" /> : <Menu name="toggle" toggle />}
      </Box>
    </header>
  );
}

export default Navigator;
