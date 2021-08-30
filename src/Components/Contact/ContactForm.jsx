import React, { useState, useEffect } from 'react';

import { Box, TextField, Collapse, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

import emailjs from 'emailjs-com';

function ContactForm() {
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAIL_JS_USER_ID);
  }, []);

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState('success');

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, message } = inputs;

    if (name !== '' && email !== '' && mobile !== '' && message !== '') {
      emailjs.send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        {
          name,
          email,
          mobile,
          message,
        },
      );
      setAlert('success');
    } else {
      setAlert('error');
    }

    setOpen(true);
    setInputs({
      name: '',
      email: '',
      mobile: '',
      message: '',
    });
  };

  return (
    <>
      <form autoComplete="on">
        <Box my={2}>
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={inputs.name}
            onChange={onChange}
            autoFocus
            required
            fullWidth
          />
        </Box>
        <Box my={2}>
          <TextField
            label="E-mail"
            variant="outlined"
            name="email"
            value={inputs.email}
            onChange={onChange}
            required
            fullWidth
          />
        </Box>
        <Box my={2}>
          <TextField
            label="Mobile"
            variant="outlined"
            name="mobile"
            value={inputs.mobile}
            onChange={onChange}
            required
            fullWidth
          />
        </Box>
        <Box my={2} minWidth="25vw">
          <TextField
            label="Message"
            variant="outlined"
            name="message"
            value={inputs.message}
            onChange={onChange}
            required
            fullWidth
            multiline
          />
        </Box>
        <Box my={2} display="flex" justifyContent="center" alignItems="center">
          <TextField
            type="submit"
            variant="outlined"
            color="primary"
            onClick={onSubmit}
            fullWidth
          >
            Submit
          </TextField>
        </Box>
      </form>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          }
          severity={alert}
        >
          {alert}...
        </Alert>
      </Collapse>
    </>
  );
}

export default ContactForm;
