import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main'
import ReactDOM from 'react-dom'
import LoginSignup from './components/login-signup/LoginSignup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      {/* <LoginSignup/>
      <Sidebar/>
      <Main/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/LoginSignup" element={<LoginSignup/>}/>
        <Route path="/sidebar" element={<Sidebar />} />

        
      </Routes>
    </Router>
    </>
  )
}

export default App