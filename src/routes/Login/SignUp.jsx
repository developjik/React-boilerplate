import React from 'react';

import { Box } from '@material-ui/core';
import SignUpForm from '../../Components/Login/SignUpForm';

function SignUp() {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      Sign Up
      <SignUpForm />
    </Box>
  );
}

export default SignUp;
