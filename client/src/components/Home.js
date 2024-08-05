import React, { useState } from 'react';
import axios from 'axios';
import './Home.css'; // Ensure this path is correct

const Home = () => {
  const [email, setEmail] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/suggestions', { email, suggestion });
      setResponseMessage(response.data.message);
      setEmail('');
      setSuggestion('');
    } catch (error) {
      setResponseMessage('Error submitting suggestion');
    }
  };

  return (
    <div className="home-container">
      <h1>We Value Your Suggestions</h1>
      <form onSubmit={handleSubmit} className="suggestion-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="suggestion">Suggestion:</label>
          <textarea
            id="suggestion"
            placeholder="Your suggestion..."
            value={suggestion}
            onChange={(e) => setSuggestion(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
};

export default Home;
