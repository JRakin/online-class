import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const totalPrice = props.cart.reduce(
    (total, course) => (total += course.price),
    0
  );
  return (
    <div className="cart mt-3 p-3 text-center">
      <h3 className="text-success">Your Order</h3>
      <hr />
      <h5 className="text-danger">Course Enrolled: {props.cart.length}</h5>
      <h5 className="text-danger">Total Price: {totalPrice}</h5>
    </div>
  );
};

export default Cart;
