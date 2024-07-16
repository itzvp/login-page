import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <div className="app">
      <div className="image-section">
        <LoginForm />
      </div>
      <div className="form-section">
        {/* This section can be empty or contain additional content */}
      </div>
    </div>
  );
};

export default App;
