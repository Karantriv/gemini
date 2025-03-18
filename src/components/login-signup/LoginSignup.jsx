import React, { useState } from "react";
import "./LoginSignup.css";


const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [errors, setErrors] = useState({});

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setErrors({}); // Clear errors on toggle
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Invalid email address";
    }
    if (!validatePassword(password)) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!isLogin && !validatePhone(phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle form submission (e.g., Firebase integration)
      console.log("Form submitted successfully!");
      setEmail("");
      setPassword("");
      setPhone("");
      setErrors({});
    }
  };

  return (
    <div className="login-signup-container">
      <div className="logo-container">
        <img src={gemini_icon} alt="Gemini Logo" className="logo" />
        <p className="tagline">Your AI-powered assistant</p>
      </div>
      <div className="form-container">
        <div className="toggle-buttons">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>
        <form onSubmit={handleSubmit} className={isLogin ? "login-form" : "signup-form"}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errors.password ? "error" : ""}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>
          {!isLogin && (
            <div className="input-group">
              <div className="phone-input">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option value="+1">+1 (US)</option>
                  <option value="+91">+91 (IN)</option>
                  {/* Add more country codes as needed */}
                </select>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={errors.phone ? "error" : ""}
                />
              </div>
              {errors.phone && <span className="error-message">{errors.phone}</span>}
            </div>
          )}
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit" className="submit-button">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>
        <div className="social-login">
          <button className="google-button">
            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google" />
            Sign in with Google
          </button>
          <button className="github-button">
            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;