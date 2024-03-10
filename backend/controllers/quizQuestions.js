// controllers/quizController.js

const questions = require('../database/questionsDB');

const fetchQuestions = async (req, res) => {
  try {
    // Generate 8 unique random indices between 0 and 29 (inclusive)
    const randomIndices = [];
    while (randomIndices.length < 8) {
      const randomIndex = Math.floor(Math.random() * 30);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }

    // Get the questions corresponding to the random indices
    const selectedQuestions = randomIndices.map(index => questions[index]);
    console.log('Selected questions:', selectedQuestions);
    console.log('Selected questions Number:', selectedQuestions.length);


    res.json(selectedQuestions);
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { fetchQuestions };
