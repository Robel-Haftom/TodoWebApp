import React from "react";
import signInBackground from "../assets/sign-in-background.jpg";
import passwordLock from "../assets/padlock_lock.png";
import userName from "../assets/user.png";
const SignIn = () => {
  return (
    <div className="body-center">
      <div className="main-container">
        <div className="signUp">
          <h2>Sign In</h2>
          <div className="input-field">
            <img src={userName} />
            <input type="text" placeholder="Enter User Name" />
          </div>
          <div className="input-field">
            <img src={passwordLock} />
            <input type="password" placeholder="Enter Password" />
          </div>
          <div className="agreement">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms"> Remember me</label>
          </div>
          <button>Login</button>
          <p>
            Don't have an account? <a href="sign up">Create One</a>
          </p>
        </div>
        <img src={signInBackground} />
      </div>
    </div>
  );
};

export default SignIn;
