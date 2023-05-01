import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login.jsx";
import SignUp from "./components/signup/Signup.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
