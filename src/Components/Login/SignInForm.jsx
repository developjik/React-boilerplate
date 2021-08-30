import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import PropTypes from 'prop-types';
import axios from 'axios';

import { Box, TextField, Collapse, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';
import { setCookie } from '../../cookie/cookie';

function SignInForm({ history, onSetUser, setIsLogin }) {
  const [open, setOpen] = useState(false);

  const [inputs, setInputs] = useState({
    id: '',
    password: '',
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
    await axios
      .post('https://developjik-nextjs.herokuapp.com/auth/signin', inputs)
      .then((res) => {
        onSetUser(res.data.user);
        setCookie('accessToken', res.data.accessToken, {
          secure: true,
          maxAge: 3600,
        });
        setIsLogin(true);
        history.push('/');
      })
      .catch((error) => {
        console.log(error);
        setOpen(true);
      });
  };

  return (
    <>
      <form>
        <Box my={2}>
          <TextField
            label="ID"
            name="id"
            value={inputs.id}
            onChange={onChange}
            variant="outlined"
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
          />
        </Box>
        <Box my={2}>
          <TextField
            value="LogIn"
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
          Check your ID & Password...
        </Alert>
      </Collapse>
    </>
  );
}

SignInForm.propTypes = {
  history: PropTypes.node.isRequired,
  onSetUser: PropTypes.func.isRequired,
  setIsLogin: PropTypes.func.isRequired,
};

export default withRouter(SignInForm);
