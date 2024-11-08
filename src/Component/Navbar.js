import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './IMGS/Cerca logo 0 16.png'; // Make sure to replace this with the path to your logo image file

function Navbar() {
  const [cartItems, setCartItems] = useState(0);

  // Use useEffect to get cart data from local storage when the component mounts
  useEffect(() => {
    const itemsInCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(itemsInCart.length); // Set the number of items in the cart
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Updated to use an image as the logo */}
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Cerca Logo" className="logo-img" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item cart-item">
              <a className="nav-link" href="#cart">
                <i className="fas fa-shopping-cart"></i>
                {/* Only show badge if there are items in the cart */}
                {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
