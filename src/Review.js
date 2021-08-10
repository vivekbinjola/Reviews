import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [counter, setCounter] = useState(0);
  const { id, name, job, image, text } = people[counter];

  const checkCounter = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setCounter((counter) => {
      let countPrev = counter - 1;
      return checkCounter(countPrev);
    });
  };
  const nextPerson = () => {
    setCounter((counter) => {
      let countNext = counter + 1;
      return checkCounter(countNext);
    });
  };
  const randomPerson = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === counter) {
      random = counter + 1;
    }
    setCounter(checkCounter(random));
    console.log(random);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="image" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
