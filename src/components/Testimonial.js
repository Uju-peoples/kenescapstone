import React from 'react';

const Testimonial = ({ name, rating, review }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star-filled' : 'star-empty'}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="testimonial">
      <h3>{name}</h3>
      <div className="rating">{renderStars()}</div>
      <p>{review}</p>
    </div>
  );
};

export default Testimonial;
