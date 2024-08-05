const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  suggestion: {
    type: String,
    required: true,
  }
});

const Suggestion = mongoose.model('Suggestion', suggestionSchema);

module.exports = Suggestion;
