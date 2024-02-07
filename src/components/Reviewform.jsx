import React, { useState } from 'react';

const ReviewForm = ({ productId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    reviewText: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Submitting review:', formData);
    
    setFormData({
      name: '',
      email: '',
      rating: 0,
      reviewText: ''
    });
  };

  return (
    <div>
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        <br />
        <label htmlFor="rating">Rating:</label>
        <input type="number" id="rating" name="rating" min="1" max="5" value={formData.rating} onChange={handleChange} required />
        <br />
        <label htmlFor="reviewText">Review:</label>
        <textarea id="reviewText" name="reviewText" value={formData.reviewText} onChange={handleChange} required />
        <br />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;