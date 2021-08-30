import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { getCookie } from '../../cookie/cookie';

import SignInFormContainer from '../../Container/SignInFormContainer';

function SignIn({ history, setIsLogin }) {
  useEffect(() => {
    if (getCookie('accessToken')) {
      history.push('/');
    }
  }, []);
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
      <SignInFormContainer setIsLogin={setIsLogin} />
    </Box>
  );
}

SignIn.propTypes = {
  history: PropTypes.node.isRequired,
  setIsLogin: PropTypes.func.isRequired,
};

export default withRouter(SignIn);
