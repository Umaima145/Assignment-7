import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from './Login.module.css';

const Login = () => {
  const [view, setView] = useState('login');
  const [loggedIn, setLoggedIn] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setSignedUp(true);
  };

  const switchToSignup = () => {
    setView('signup');
    setSignedUp(false);
  };

  const switchToLogin = () => {
    setView('login');
    setLoggedIn(false);
  };

  return (
    <div className={styles.wrapper}>
      {view === 'login' ? (
        <>
          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
            <h1>Login</h1>
            <div className={styles.inputbox}>
              <input type="text" placeholder='UserName' required />
              <FaUser className={styles.icon} />
            </div>
            <div className={styles.inputbox}>
              <input type="password" placeholder='Password' required />
              <FaLock className={styles.icon} />
            </div>
            <div className={styles.remfor}>
              <label><input type="checkbox" />Remember me &nbsp;</label>
              <a href="#">Forget Password ?</a>
            </div>
            <button type='submit'>{loggedIn ? 'Welcome User' : 'Login'}</button>
            <div className={styles.Signup}>
              <p>Don't have an account? <span onClick={switchToSignup} className={styles.link}>Sign up</span></p>
            </div>
          </form>
          {loggedIn && (
            <>
              <h1>Welcome User</h1>
            </>
          )}
        </>
      ) : (
        <div>
          <h1>Signup</h1>
          <form onSubmit={handleSignup}>
            <div className={styles.inputbox}>
              <input type="email" placeholder='Email' required />
              <MdEmail className={styles.icon} />
            </div>
            <div className={styles.inputbox}>
              <input type="text" placeholder='UserName' required />
              <FaUser className={styles.icon} />
            </div>
            <div className={styles.inputbox}>
              <input type="password" placeholder='Password' required />
              <FaLock className={styles.icon} />
            </div>
            <button type='submit'>Signup</button>
            <div className={styles.Signup}>
              <p>Already have an account? <span onClick={switchToLogin} className={styles.link}>Login</span></p>
            </div>
          </form>
          {signedUp && (
            <>
              <h1>Welcome New User</h1>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
