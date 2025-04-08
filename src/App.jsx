import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './firebase/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Profile from "./components/profile/Profile";
import LandingPage from "./components/landing/LandingPage";
import "./App.css";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  return currentUser ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={
            <PrivateRoute>
              <div className="protected-container">
                <Sidebar />
                <Main />
              </div>
            </PrivateRoute>
          }/>
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App