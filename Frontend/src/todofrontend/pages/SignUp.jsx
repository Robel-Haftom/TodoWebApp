import React from "react";
import signUpBackground from "../assets/sign-up-background.jpg";
import first_last_name from "../assets/edit.png";
import email from "../assets/email.png";
import passwordLock from "../assets/padlock_lock.png";
import passwordOpen from "../assets/padlock_open.png";
import userName from "../assets/user.png";
const SignUp = () => {
  return (
    <div className="body-center">
      <div className="main-container">
        <img src={signUpBackground} />
        <div className="signUp">
          <h2>Sign Up</h2>
          <div className="input-field">
            <img src={first_last_name} />
            <input type="text" placeholder="Enter First Name"></input>
          </div>
          <div className="input-field">
            <img src={first_last_name} />
            <input type="text" placeholder="Enter Last Name" />
          </div>
          <div className="input-field">
            <img src={userName} />
            <input type="text" placeholder="Enter User Name" />
          </div>
          <div className="input-field">
            <img src={email} />
            <input type="email" placeholder="Enter Email" />
          </div>
          <div className="input-field">
            <img src={passwordLock} />
            <input type="password" placeholder="Enter Password" />
          </div>
          <div className="input-field">
            <img src={passwordOpen} />
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="agreement">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms"> I agree to all terms </label>
          </div>
          <button>Register</button>
          <p>
            Already have an account? <a href="signin">Sign in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
