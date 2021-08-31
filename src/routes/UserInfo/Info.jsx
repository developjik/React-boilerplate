import React from 'react';
import { useSelector } from 'react-redux';

import { Box, Typography } from '@material-ui/core';

function Info() {
  const user = useSelector((state) => state.user);

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h3">Name : {user.name}</Typography>
      <Typography variant="h3">ID : {user.id}</Typography>
      <Typography variant="h3">Email : {user.email}</Typography>
      <Typography variant="h3">Phone : {user.phone}</Typography>
    </Box>
  );
}

export default Info;
