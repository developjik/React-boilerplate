import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import { setUser } from '../modules/user';
import SignInForm from '../Components/Login/SignInForm';

function SignInFormContainer({ setIsLogin }) {
  const dispatch = useDispatch();
  const onSetUser = (data) => dispatch(setUser(data));
  return <SignInForm onSetUser={onSetUser} setIsLogin={setIsLogin} />;
}

SignInFormContainer.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};
export default SignInFormContainer;
