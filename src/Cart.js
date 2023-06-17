import React from 'react';

const Cart = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.firstName} {item.lastName} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default Cart;
