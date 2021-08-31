import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Box, Button, IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import { removeCookie } from '../../cookie/cookie';

import { setUser } from '../../modules/user';

import './Navigator.css';

function Navigator({ history }) {
  const [state, setState] = useState({
    matches: window.matchMedia('max-width: 960px)').matches,
  });
  useEffect(() => {
    const handler = (e) => setState({ matches: e.matches });
    window.matchMedia('(min-width: 960px)').addListener(handler);
  }, []);

  const user = useSelector((data) => data.user);

  const dispatch = useDispatch();
  const onSetUser = (data) => dispatch(setUser(data));

  const onClickLogOut = () => {
    removeCookie('accessToken');
    onSetUser({});
    history.push('/');
  };

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
        {state.matches ? (
          <ul className="navigator">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            {user.id ? (
              <>
                <Link to="/info">
                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <AccountCircleIcon style={{ marginRight: '0.5vw' }} />
                    {user.id}
                  </li>
                </Link>
                <Button onClick={onClickLogOut}>
                  <li>Logout</li>
                </Button>
              </>
            ) : (
              <>
                <Link to="/signIn">
                  <li>SignIn</li>
                </Link>
                <Link to="/signUp">
                  <li>SignUp</li>
                </Link>
              </>
            )}
          </ul>
        ) : (
          <>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </>
        )}
      </Box>
    </header>
  );
}

Navigator.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default withRouter(Navigator);
