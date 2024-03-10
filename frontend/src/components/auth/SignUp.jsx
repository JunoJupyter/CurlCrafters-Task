import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { Navigate } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("Sign up successful");
      setIsSignedUp(true);
    } catch (error) {
      console.log("Sign up error:", error.message);
      setError(error.message);
      // Display error message in alert popup
      window.alert(error.message);
      // Trigger redirection
      setShouldRedirect(true);
    }
  };

  if (isSignedUp) {
    return <Navigate to="/home" />;
  }

  if (shouldRedirect) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
