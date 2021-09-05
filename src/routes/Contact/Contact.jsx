import React from 'react';

import { Box, Typography } from '@material-ui/core';

import ContactForm from '../../Components/Contact/ContactForm';

function Contact() {
  return (
    <Box
      width="100%"
      height="85vh"
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

export default Contact;
