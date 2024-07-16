import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <Card className="login-card">
      <CardContent>
        <div className="login-box">
          <h2>ALREADY MEMBERS</h2>
          <form>
            <input type="text" placeholder="Mahisa Dyan Diptya" />
            <input type="password" placeholder="Enter your password" />
            <button type="submit">SIGN IN</button>
          </form>
          <div className="help-link">
            <button
              onClick={() => {
                /* Add help logic here */
              }}
            >
              Need help?
            </button>
          </div>
        </div>
        <div className="create-account">
          <span>Don't have an account yet?</span>
          <button
            onClick={() => {
              /* Add create account logic here */
            }}
          >
            Create an account
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
