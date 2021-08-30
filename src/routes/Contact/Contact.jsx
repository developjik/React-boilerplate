import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Box, Typography } from '@material-ui/core';
import { getCookie } from '../../cookie/cookie';

import ContactForm from '../../Components/Contact/ContactForm';

function Contact({ history, setIsLogin }) {
  useEffect(() => {
    if (!getCookie('accessToken')) {
      setIsLogin(false);
      history.push('/signIn');
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
      <Typography>Contact me</Typography>
      <ContactForm />
    </Box>
  );
}

Contact.propTypes = {
  history: PropTypes.node.isRequired,
  setIsLogin: PropTypes.func.isRequired,
};

export default withRouter(Contact);
