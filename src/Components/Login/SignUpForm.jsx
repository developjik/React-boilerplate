import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import axios from 'axios';

import { Box, TextField, Collapse, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

function SignUpForm({ history }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const [inputs, setInputs] = useState({
    name: '',
    id: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: '',
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      inputs.name === '' ||
      inputs.id === '' ||
      inputs.password === '' ||
      inputs.confirmPassword === '' ||
      inputs.email === '' ||
      inputs.phone === ''
    ) {
      setMessage('Empty Something...');
      setOpen(true);
    } else if (inputs.password !== inputs.confirmPassword) {
      setMessage('Password & confirmPassword Is Not Equal...');
      setOpen(true);
    } else if (inputs.id.length < 4) {
      setMessage('ID must be More than 4 Letters');
      setOpen(true);
    } else if (inputs.password.length < 6) {
      setMessage('Password must be More than 6 Letters');
      setOpen(true);
    } else if (!inputs.email.includes('@')) {
      setMessage('Wrong Email Format...');
      setOpen(true);
    } else {
      const data = {
        id: inputs.id,
        password: inputs.password,
        name: inputs.name,
        email: inputs.email,
        phone: inputs.phone,
      };
      await axios
        .post('https://developjik-nextjs.herokuapp.com/auth/signup', data)
        .then((res) => {
          console.log(res.data);
          history.push('/');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <form>
        <Box my={2}>
          <TextField
            label="Name"
            name="name"
            value={inputs.name}
            variant="outlined"
            onChange={onChange}
            required
            autoFocus
          />
        </Box>
        <Box my={2}>
          <TextField
            label="ID"
            name="id"
            value={inputs.id}
            onChange={onChange}
            variant="outlined"
            required
          />
        </Box>
        <Box my={2}>
          <TextField
            label="Password"
            name="password"
            value={inputs.password}
            onChange={onChange}
            variant="outlined"
            type="password"
            required
          />
        </Box>
        <Box my={2}>
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            value={inputs.confirmPassword}
            onChange={onChange}
            variant="outlined"
            type="password"
            required
          />
        </Box>
        <Box my={2}>
          <TextField
            label="Email"
            name="email"
            value={inputs.email}
            onChange={onChange}
            variant="outlined"
            type="email"
            required
          />
        </Box>
        <Box my={2}>
          <TextField
            label="Phone"
            name="phone"
            value={inputs.phone}
            onChange={onChange}
            variant="outlined"
            required
          />
        </Box>
        <Box my={2}>
          <TextField
            value="Register"
            type="submit"
            variant="outlined"
            fullWidth
            onClick={onSubmit}
          />
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
          severity="error"
        >
          {message}
        </Alert>
      </Collapse>
    </>
  );
}

SignUpForm.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withRouter(SignUpForm);
