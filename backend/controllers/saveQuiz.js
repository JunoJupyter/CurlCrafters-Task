const QuizData = require('../models/userQuiz'); // Import your QuizData model

// Controller function to store quiz data
const storeQuizData = async (req, res) => {
  try {
    // Extract quiz data from request body
    const { userEmail, totalPoints, questionsAttempted, questions } = req.body;

    console.log('Quiz data:', req.body);
    console.log('Email:', userEmail);

    // Create an array of quiz questions with the correct structure
    
    const formattedQuestions = questions.map(question => ({
      questionId: question.questionId,
      question: question.question,
      options: question.options,
      correctAnswer: question.correctAnswer
    }));

    // Create a new QuizData document
    const quizData = new QuizData({
      email: userEmail,
      quizzes: [{
        totalPoints,
        questionsAttempted,
        questions: formattedQuestions
      }]
    });

    console.log('Quiz data:', quizData);
    // Save the quiz data to the database
    await quizData.save();

    res.status(201).json({ message: 'Quiz data stored successfully' });
  } catch (error) {
    console.error('Error storing quiz data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  storeQuizData
};
