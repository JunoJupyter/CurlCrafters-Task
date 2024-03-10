const mongoose = require('mongoose');

const userQuizSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  quizzes: [
    {
      questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
      score: { type: Number, default: 0 },
      createdAt: { type: Date, default: Date.now }
    }
  ]
});

const UserQuiz = mongoose.model('UserQuiz', userQuizSchema);

module.exports = UserQuiz;
