const express = require('express');
const router = express.Router();
const { authToken } = require('./middlewares/authToken');
const { fetchQuestions } = require('./controllers/quizQuestions');
const { storeQuizData } = require('./controllers/saveQuiz');

// Protected route to fetch questions
router.get('/start-quiz', fetchQuestions);

router.post('/store-quiz', storeQuizData);

module.exports = router;