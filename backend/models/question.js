const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionId: { type: Number, required: true, unique: true },
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true }, // Correct answer as a string
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
