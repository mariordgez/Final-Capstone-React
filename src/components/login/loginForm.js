import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import style from './LoginForm.module.css';

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
    <div className={style.loginContainer}>
      <form onSubmit={enterCredentials} className={style.login}>
        <h1>Please enter your username to Log In</h1>
        {failed ? <p className={style.formWarning}>Invalid username entered!</p>
          : null}
        <input className={style.loginField} name="username" id="username" placeholder="Username" ref={(el) => { valRef.current[0] = el; }} />
        <button className={style.loginSubmit} type="submit">Log In</button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  submitCredentialsFunc: PropTypes.func.isRequired,
  failed: PropTypes.bool.isRequired,
};

export default LoginForm;
