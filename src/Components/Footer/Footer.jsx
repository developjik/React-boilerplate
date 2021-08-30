import React from 'react';

import { Box } from '@material-ui/core';

function Footer() {
  const year = new Date();

  return (
    <Box
      height="5vh"
      width="100%"
      position="fixed"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      Footer , {year.getFullYear()}
    </Box>
  );
}

export default Footer;
