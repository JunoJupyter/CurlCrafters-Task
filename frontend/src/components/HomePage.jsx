import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const HomePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const user = auth.currentUser;

  // Extract username from email address
  const getUsernameFromEmail = () => {
    const emailParts = user.email.split('@');
    const username = emailParts[0].charAt(0).toUpperCase() + emailParts[0].slice(1);
    return username;
  };

  const handleSignOut = () => {
    if (window.confirm('Are you sure you want to sign out?')) {
      signOut(auth)
        .then(() => {
          console.log('Sign out successful');
          // Redirect to login page after sign out
          navigate('/');
        })
        .catch((error) => console.log(error));
    }
  };

  const handleStartQuiz = () => {
    // Navigate to the quiz page when the button is clicked
    navigate('/quiz'); // Update the route to the quiz page
  };

  return (
    <div>
      <nav>
        <h1>Quiz App</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </nav>
      <div className="welcome-message">
        <h2>Welcome to Quiz App, {username || getUsernameFromEmail()}!</h2>
        <div className="quiz-instructions">
          <h3>Instructions:</h3>
          <ul>
            <li>Read each question carefully.</li>
            <li>Select the best answer from the options provided.</li>
            <li>10 points is awarded for the correct answer.</li>
            <li>The result will be declared at the end of the quiz.</li>
          </ul>
        </div>
        <div className="username-input">
          <label>Enter Your Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button className="start-quiz-btn" onClick={handleStartQuiz}>Start Quiz</button>
      </div>
    </div>
  );
};

export default HomePage;
