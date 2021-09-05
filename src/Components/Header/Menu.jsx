import React, { useRef } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { Button, IconButton, Switch } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { removeCookie } from '../../cookie/cookie';

import { setUser } from '../../modules/user';

import './Menu.css';

function Menu({ history, name, darkMode, setDarkMode, toggle }) {
  const ref = useRef(0);

  const user = useSelector((data) => data.user);

  const dispatch = useDispatch();
  const onSetUser = (data) => dispatch(setUser(data));

  const onClickToggle = () => {
    ref.current.classList.toggle('active');
  };

  const onClickLogOut = () => {
    onClickToggle();
    removeCookie('accessToken');
    onSetUser({});
    history.push('/');
  };

  return (
    <>
      {toggle && (
        <>
          <Switch
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
          />
          <IconButton style={{ zIndex: '100' }} onClick={onClickToggle}>
            <MenuIcon />
          </IconButton>
        </>
      )}
      <ul ref={ref} className={darkMode ? `${name} dark` : `${name}`}>
        <Link to="/" onClick={onClickToggle}>
          <li>Home</li>
        </Link>

        {user.id ? (
          <>
            <Link to="/contact" onClick={onClickToggle}>
              <li>Contact</li>
            </Link>
            <Link to="/info" onClick={onClickToggle}>
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
            <Link to="/signIn" onClick={onClickToggle}>
              <li>SignIn</li>
            </Link>
            <Link to="/signUp" onClick={onClickToggle}>
              <li>SignUp</li>
            </Link>
          </>
        )}
        <Switch
          checked={darkMode}
          onChange={() => setDarkMode((prev) => !prev)}
        />
      </ul>
    </>
  );
}

Menu.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  name: PropTypes.string.isRequired,
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired,
  toggle: PropTypes.bool,
};

Menu.defaultProps = {
  toggle: false,
};

export default withRouter(Menu);
