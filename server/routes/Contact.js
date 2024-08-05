// server/routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Import the Contact model

// POST route to handle contact form submission
router.post('/', async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({ message: 'Email and message are required' });
    }

    // Create a new contact entry
    const newContact = new Contact({ email, message });
    await newContact.save();

    res.status(200).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
