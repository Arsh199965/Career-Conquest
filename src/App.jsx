import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import DashboardPage from './components/DashboardPage';
import Profile from './components/Profile';
import Home from "./components/HomePage";
import SignUpForm from './components/SignUpForm';
import TestPage from './components/TestPage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/tests" element={<TestPage/>} />
      </Routes>
    </Router>
  );
}

export default App;