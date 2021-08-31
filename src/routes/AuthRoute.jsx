import React, { useEffect } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { getCookie } from '../cookie/cookie';
import { setUser } from '../modules/user';

function AuthRoute({ history, path, component }) {
  const dispatch = useDispatch();
  const onSetUser = (data) => dispatch(setUser(data));

  useEffect(() => {
    if (!getCookie('accessToken')) {
      history.push('/signIn');
      // window.alert('Login Please...');
      onSetUser({});
    }
  }, []);

  return <Route path={path} component={component} exact />;
}

AuthRoute.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

export default withRouter(AuthRoute);
