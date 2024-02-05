// src/App.js
import React, { useState } from "react";
import {BrowserRouter as Router,Route,Routes,Navigate,} from "react-router-dom";
import Header from "./Components/Layout/pages/Header";
import Home from "./Components/Layout/pages/Home";
import Register from "./Components/Layout/pages/Register";
import Login from "./Components/Layout/pages/Login";
import UserProfile from "./Components/Layout/pages/UserProfile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    setUserId("user123");
    localStorage.setItem("userId", "user123");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userId");
  };

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home isLoggedIn={isLoggedIn} userId={userId} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/profile/:userId"
          element={
            isLoggedIn ? (
              <UserProfile isLoggedIn={isLoggedIn} userId={userId} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
