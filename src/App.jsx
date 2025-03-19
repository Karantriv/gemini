import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main'
import LoginSignup from './components/login-signup/LoginSignup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Sidebar />
            <Main />
          </>
        }/>
        <Route path="/login-signup" element={<LoginSignup/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App