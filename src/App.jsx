import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import Posts from "./components/posts/posts"; 
import Login from "./components/login/login"; 
import SignUp from "./components/signup/signup";
import "./App.css";

const GeminiPage = () => (
  <div className="gemini-container">
    <Sidebar />
    <Main />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gemini" element={<GeminiPage />} />
        <Route path="/posts" element={<Posts />} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/signup" element={<SignUp/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
