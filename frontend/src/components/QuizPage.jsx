import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const QuizPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [totalPoints, setTotalPoints] = useState(0);
  const [questionsAttempted, setQuestionsAttempted] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions();
    getUserEmail();
  }, []);

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      handleNextQuestion();
    }

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        "http://localhost:5500/api/quiz/start-quiz",
        {
          method: "GET",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setQuestions(data);
        setUserAnswers(new Array(data.length).fill(""));
      } else {
        console.error("Failed to fetch questions:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleAnswerSelect = (answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimeLeft(20);
    } else {
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = () => {
    setSubmitted(true);
    calculateResult();
    storeQuizData();
  };

  const calculateResult = () => {
    let points = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        points += 10;
      }
    });
    setTotalPoints(points);
    setQuestionsAttempted(userAnswers.filter((answer) => answer !== "").length);
  };

  const getUserEmail = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        setUserEmail(idTokenResult.claims.email);
      }
    } catch (error) {
      console.error("Error fetching user email:", error);
    }
  };

  const storeQuizData = async () => {
    try {
      const quizData = {
        userEmail: userEmail,
        totalPoints: totalPoints,
        questionsAttempted: questionsAttempted,
        questions: questions,
      };
      const response = await fetch(
        "http://localhost:5500/api/quiz/store-quiz",
        {
          method: "POST",
          body: JSON.stringify(quizData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        console.log("Quiz data saved successfully");
      } else {
        console.error("Failed to save quiz data:", response.statusText);
      }
    } catch (error) {
      console.error("Error saving quiz data:", error);
    }
  };

  const handleReturnToHomepage = () => {
    navigate("/home");
  };

  return (
    <div>
      {questions && currentQuestionIndex < questions.length && (
        <div>
          <p>
            Question {currentQuestionIndex + 1}:{" "}
            {questions[currentQuestionIndex].question}
          </p>
          <ul>
            {questions[currentQuestionIndex].options.map(
              (option, optionIndex) => (
                <li key={optionIndex}>
                  <input
                    type="radio"
                    id={`option-${optionIndex}`}
                    name={`question-${currentQuestionIndex}`}
                    value={option}
                    onChange={() => handleAnswerSelect(option)}
                    checked={userAnswers[currentQuestionIndex] === option}
                  />
                  <label htmlFor={`option-${optionIndex}`}>{option}</label>
                </li>
              )
            )}
          </ul>
          <p>Time Left: {timeLeft}</p>
          <button onClick={handleNextQuestion}>Next Question</button>
        </div>
      )}
      {submitted && (
        <div className="quiz-result-popup">
          <h2>Quiz Result</h2>
          <p>User Email: {auth.currentUser.email}</p>
          <p>Total Points: {totalPoints}</p>
          <p>Questions Attempted: {questionsAttempted}</p>
          <button onClick={handleReturnToHomepage}>Return to Homepage</button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
