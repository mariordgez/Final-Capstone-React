import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({
  submitCredentialsFunc,
  failed,
}) => {
  const valRef = useRef([]);
  const val = ['username'];
  useEffect(() => {
    if (val.length !== 0) {
      valRef.current[0].focus();
    }
  }, [val]);

  const enterCredentials = (e) => {
    e.preventDefault();
    if (valRef.current[0].value) {
      const uNameVal = valRef.current[0].value;
      submitCredentialsFunc(uNameVal);
      valRef.current[0].value = '';
    }
  };

  return (
    <form onSubmit={enterCredentials}>
      {failed ? <p className="form-warning">Invalid username entered! Please enter the username of an existing user.</p>
        : null}
      <input className="login-field" name="username" id="username" placeholder="Username" ref={(el) => { valRef.current[0] = el; }} />
      <button className="login-submit" type="submit">Log In</button>
    </form>
  );
};

LoginForm.propTypes = {
  submitCredentialsFunc: PropTypes.func.isRequired,
  failed: PropTypes.bool.isRequired,
};

export default LoginForm;
