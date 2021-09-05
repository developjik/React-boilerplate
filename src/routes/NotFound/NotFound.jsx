import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@material-ui/core';

import './NotFound.css';

function NotFound() {
  const ref = useRef(0);

  const mouseMove = (e) => {
    ref.current.style.backgroundPositionX = `${-e.clientX / 5}px`;
    ref.current.style.backgroundPositionY = `${-e.clientY / 5}px`;
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <Box
      width="100%"
      height="85vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
      className="bg"
      ref={ref}
    >
      <Typography variant="h1">404</Typography>
      <Typography variant="h3">Page Not Found...</Typography>
      <Link to="/">Back to Home</Link>
    </Box>
  );
}

export default NotFound;
