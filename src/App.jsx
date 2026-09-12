import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {

  const [showResetPassword, setShowResetPassword] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const [temporaryPasswordInput, setTemporaryPasswordInput] = useState("");
const temporaryPassword = "adminNew2"; // Replace with your actual temporary password
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [showNewPassword, setShowNewPassword] = useState(false);
const [showTemporaryPassword, setShowTemporaryPassword] = useState(false);
const [showNewPasswordInput, setShowNewPasswordInput] = useState(false);
const [showConfirmPasswordInput, setShowConfirmPasswordInput] = useState(false);
const [showLoginPassword, setShowLoginPassword] = useState(false);
const [showSuccessModal, setShowSuccessModal] = useState(false);
const [showDashboard, setShowDashboard] = useState(false);

if (showDashboard) {
  return <Dashboard 
  onLogout={() => setShowDashboard(false)}
  />;
}

if (showNewPassword) {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Set a new password</h1>

        <form
  className="login-form"
  onSubmit={(e) => {
    e.preventDefault();

    if (temporaryPasswordInput !== temporaryPassword) {
      setMessage("Incorrect temporary password.");
      return;
    }

    if (newPassword.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    if (!/[A-Z]/.test(newPassword) || !/[a-z]/.test(newPassword)) {
      setMessage("Password must contain uppercase and lowercase letters.");
      return;
    }

    if (!/[0-9]/.test(newPassword)) {
      setMessage("Password must contain at least one number.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage("");
    setShowSuccessModal(true);
  }}
>
          <div className="form-group">
            <label>Temporary password</label>
            <div className="password-input-wrapper">
  <div className="password-input-wrapper">
  <input
    type={showTemporaryPassword ? "text" : "password"}
    placeholder="Enter your temporary password"
    value={temporaryPasswordInput}
    onChange={(e) => setTemporaryPasswordInput(e.target.value)}
  />

  <button
    type="button"
    className="password-toggle"
    onClick={() => setShowTemporaryPassword(!showTemporaryPassword)}
  >
    <span className="eye-icon"></span>
  </button>
</div>
</div>

          </div>

          <div className="form-group">
            <label>New password</label>
              <div className="password-input-wrapper">
  <input
    type={showNewPasswordInput ? "text" : "password"}
    placeholder="Enter your new password"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
  />

  <button
    type="button"
    className="password-toggle"
    onClick={() => setShowNewPasswordInput(!showNewPasswordInput)}
  >
    <span className="eye-icon"></span>
  </button>
</div>
          </div>

          <div className="form-group">
            <label>Confirm new password</label>
            <div className="password-input-wrapper">
  <input
    type={showConfirmPasswordInput ? "text" : "password"}
    placeholder="Enter the new password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />

  <button
    type="button"
    className="password-toggle"
    onClick={() =>
      setShowConfirmPasswordInput(!showConfirmPasswordInput)
    }
  >
    <span className="eye-icon"></span>
  </button>
</div>
          </div>

          <div className="password-requirements">
            <p>At least 8 characters</p>
            <p>Upper and lowercase letters</p>
            <p>At least one number</p>
          </div>

          <button type="submit">
            Update password
          </button>
        </form>
      
<div className="back-to-reset">
  <button
    type="button"
    onClick={() => {
      setShowNewPassword(false);
      setMessage("");
    }}
  >
    Back
  </button>
</div>

        {message && (
          <p
            className={
              message.includes("successfully")
                ? "message success"
                : "message error"
            }
          >
            {message}
          </p>
        )}
      </div>
      {showSuccessModal && (
  <div className="success-modal-overlay">
    <div className="success-modal">
      <div className="success-icon">✓</div>

      <h2>Password reset successfully</h2>

      <p>
        Your temporary password has been changed to a new password.
      </p>

      <button
        type="button"
        onClick={() => {
          setShowSuccessModal(false);
          setShowNewPassword(false);
          setShowResetPassword(false);
          setMessage("");
          setTemporaryPasswordInput("");
          setNewPassword("");
          setConfirmPassword("");
        }}
      >
        Done
      </button>
    </div>
  </div>
)}
    </div>
  );
}


if (showResetPassword) {
    return (
      <div className="login-page">
        <div className="login-container">
          <h1>Reset Password</h1>

          <p className="subtitle">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form
  className="login-form"
  onSubmit={(e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    setMessage("");
    setShowNewPassword(true);
  }}
>

            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />

            </div>

            <button type="submit">
              Send Reset Link
            </button>
          </form>

          <div className="reset-password">
            <button
              type="button"
              onClick={() => setShowResetPassword(false)}
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Welcome back</h1>

        <p className="subtitle">
          Sign in to access the admin/finance dashboard
        </p>

        <form className="login-form"
        onSubmit={ (e) => {
          e.preventDefault();
          if (!email || !password) {
            setMessage("Please enter your email and password");
            message.fontcolor = "red";
            return;
          }
          setShowDashboard(true);
        }}
        
        >
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
           <div className="password-input-wrapper">
  <input
    type={showLoginPassword ? "text" : "password"}
    placeholder="Enter your Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <button
    type="button"
    className="password-toggle"
    onClick={() => setShowLoginPassword(!showLoginPassword)}
  >
    <span className="eye-icon"></span>
  </button>
</div> 
          </div>

          <div className="reset-password">
            <button
              type="button"
              onClick={() => setShowResetPassword(true)}
            >
              Reset Password
            </button>
          </div>

          <button type="submit">
            Login
          </button>
        </form>
        {message && (
  <p className={message.includes("successful") ? "message success" : "message error"}>
    {message}
  </p>
)}
      </div>
    </div>
  );
}

export default App;