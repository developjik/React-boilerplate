import React, { useEffect } from 'react';
import { withRouter, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { getCookie } from '../cookie/cookie';

function NoAuthRoute({ history, path, component }) {
  const user = useSelector((data) => data.user);

  useEffect(() => {
    if (user.id && getCookie('accessToken')) {
      history.goBack();
    }
  }, []);

  return <Route path={path} component={component} exact />;
}
NoAuthRoute.propTypes = {
  history: PropTypes.shape({ goBack: PropTypes.func }).isRequired,
  path: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};
export default withRouter(NoAuthRoute);
