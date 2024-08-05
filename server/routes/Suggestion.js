app.post('/Suggestions', async (req, res) => {
    try {
      const { email, suggestion } = req.body;
      const newSuggestion = new Suggestion({ email, suggestion });
      await newSuggestion.save();
      res.status(201).json({ message: 'Suggestion received' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save suggestion' });
    }
  });
  