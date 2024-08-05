const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Contact model
const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Define Suggestion model
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

// Define Teacher model
const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  }
});

const Teacher = mongoose.model('Teacher', teacherSchema);

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from server!');
});

// Handle contact form submission
app.post('/contact', async (req, res) => {
  try {
    const { email, message } = req.body;
    const newContact = new Contact({ email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact data saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save contact data' });
  }
});

// Handle suggestion form submission
app.post('/suggestions', async (req, res) => {
  try {
    const { email, suggestion } = req.body;
    const newSuggestion = new Suggestion({ email, suggestion });
    await newSuggestion.save();
    res.status(201).json({ message: 'Suggestion received' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save suggestion' });
  }
});

// Handle teacher profile submission
app.post('/teachers', async (req, res) => {
  try {
    const { name, subject, bio, photo } = req.body;
    const newTeacher = new Teacher({ name, subject, bio, photo });
    await newTeacher.save();
    res.status(201).json({ message: 'Teacher profile saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save teacher profile' });
  }
});

// Fetch all teacher profiles
app.get('/teachers', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teacher profiles' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
