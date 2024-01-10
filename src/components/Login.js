import React from "react";
import "../styles/Login.css";

export const Login = () => {

  return (
    <div className="login">
      <div className="form">
        <h2>LOGIN</h2>
        <form>
          <div className="username">
            <label htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => {}}
            />
          </div>
          <div className="password">
            <label htmlFor="password">
              PASSWORD
            </label>
            <input
              type= 'password'
              id="password"
              onChange={(e) => {}}
            />
          </div>
          <button type="submit" className="login-submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};
