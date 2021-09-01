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
      <Typography variant="h5">Name : {user.name}</Typography>
      <Typography variant="h5">ID : {user.id}</Typography>
      <Typography variant="h5">Email : {user.email}</Typography>
      <Typography variant="h5">Phone : {user.phone}</Typography>
    </Box>
  );
}

export default Info;
