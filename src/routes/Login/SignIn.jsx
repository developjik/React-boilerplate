import React from 'react';

import { Box } from '@material-ui/core';

import SignInForm from '../../Components/Login/SignInForm';

function SignIn() {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      Sign In
      <SignInForm />
    </Box>
  );
}

export default SignIn;
