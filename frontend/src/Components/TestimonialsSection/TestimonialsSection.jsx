import React from 'react';
import './TestimonialsSection.css';

import user1 from '../../assets/pic.avif';
import user2 from '../../assets/pic2.webp';
import user4 from '../../assets/pic4.jpg';

function TestimonialsSection() {
  const reviews = [
    {
      name: "Ali Khan",
      text: "Amazing food and quick delivery! Highly recommended.",
      img: user1,
      rating: 5
    },
    {
      name: "Sara Ahmed",
      text: "Hina's Kitchen never disappoints. Love the taste!",
      img: user2,
      rating: 4
    },
    {
      name: "Ayesha Malik",
      text: "Delicious meals, fresh ingredients, and very friendly service.",
      img: user4,
      rating: 5
    }
  ];

  const renderStars = (count) => {
    return '⭐'.repeat(count) + '☆'.repeat(5 - count);
  };

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Customers Say</h2>

      <div className="testimonial-grid">
        {reviews.map(review => (
          <div className="testimonial-card" key={review.name}>
            <img src={review.img} alt={review.name} />
            <h4>{review.name}</h4>
            <div className="testimonial-stars">{renderStars(review.rating)}</div>
            <p>"{review.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsSection;
