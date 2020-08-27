import React from 'react';
import './App.css';
import Courses from './Components/Courses/Course';
import fakeData from './fakeData/onlineCourses';
import { useState } from 'react';
import Cart from './Components/Cart/Cart';

function App() {
  // LOADING DATA FROM FAKE DATA FOLDER
  const first10 = fakeData.slice(0, 10);
  const [courses, setCourses] = useState(first10);
  const [cart, setCart] = useState([]);

  const handleEnrollCourse = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };
  return (
    <div className="container">
      {/* NAVBAR USING BOOTSTRAP */}
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
          <a className="navbar-brand" href=" ">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href=" ">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" ">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* COURSE CONTAINER */}
      <div className="d-flex mt-5">
        <div className="course-container">
          {courses.map((course) => (
            <Courses
              course={course}
              key={course.id}
              handleEnrollCourse={handleEnrollCourse}
            ></Courses>
          ))}
        </div>
        <div>{<Cart cart={cart}></Cart>}</div>
      </div>
    </div>
  );
}

export default App;
