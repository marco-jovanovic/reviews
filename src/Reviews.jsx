import React, { useState } from 'react';
import { reviews } from '../data';
import { FcNext, FcPrevious } from 'react-icons/fc';

function Reviews() {
  const [myreviews, setMyReviews] = useState(reviews);
  const [index, setIndex] = useState(0);

  const nextReview = () => {
    setIndex((index) => index + 1);

    if (index > myreviews.length - 1) {
      setIndex(0);
    }
  };
  const prevReview = () => {
    setIndex((index) => index - 1);

    if (index === 0) {
      setIndex(myreviews.length - 1);
    }
  };

  const randomReview = () => {
    setIndex(Math.floor(Math.random() * 4));
  };

  return (
    <div className="container">
      <div className="review-card">
        <img
          className="img-responsive"
          src={myreviews[index]?.image}
          alt="review"
        />
        <h3 className="m-2">{myreviews[index]?.name}</h3>
        <h5 className="m-2">{myreviews[index]?.job}</h5>
        <p className="m-2">{myreviews[index]?.text}</p>
        <div className="buttons">
          <div>
            <FcPrevious className="next-btn" onClick={prevReview} size={40} />
            <FcNext className="next-btn" onClick={nextReview} size={40} />
          </div>

          <button className="btn" onClick={randomReview}>
            Surprise me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
