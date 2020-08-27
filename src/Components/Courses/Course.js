import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Courses = (props) => {
  const course = props.course;
  return (
    // CARD ITEMS
    <div className="card m-3">
      <img
        className="card-img-top p-3 rounded"
        src={course.image}
        alt="Course"
      />
      <div className="card-body">
        <h5 className="card-title">{course.name}</h5>
        <p className="card-text text-danger">
          <small>By {course.instructor}</small>
        </p>
        <p>${course.price}</p>
        <hr />
        <button
          className="btn btn-success"
          onClick={() => props.handleEnrollCourse(course)}
        >
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default Courses;
