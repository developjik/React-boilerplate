import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { getCookie } from '../../cookie/cookie';

import './Navigator.css';

function Navigator({ isLogin, setIsLogin }) {
  useEffect(() => {
    if (getCookie('accessToken')) {
      setIsLogin(true);
    }
  }, []);
  return (
    <header>
      <Box
        height="10vh"
        width="100%"
        padding="0 5vw"
        position="fixed"
        top="0"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        zIndex="10"
      >
        <Link to="/" id="#" className="logo">
          <li>Logo</li>
        </Link>
        <ul className="navigator">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          {isLogin ? (
            <Link to="/info">
              <li>Info</li>
            </Link>
          ) : (
            <>
              <Link to="/signin">
                <li>SignIn</li>
              </Link>
              <Link to="/signup">
                <li>SignUp</li>
              </Link>
            </>
          )}
        </ul>
      </Box>
    </header>
  );
}

Navigator.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  setIsLogin: PropTypes.func.isRequired,
};

export default Navigator;
