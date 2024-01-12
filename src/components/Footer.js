import React from 'react';
import '../Styles.css';

const Footer = () => {
  return (
    <footer>
      {/* Use the imported component */}
      <img src="C:\Users\kemma\Desktop\kenescapstone\kenescapstone\src\components\styles\restaurant.jpg" alt="Logo" />

      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservation">Reservation</a></li>
          <li><a href="/order-online">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>

      <div className="contact">
        <h5>CONTACT</h5>
        <ul>
          <li>13 Ozumba Mbadiwe street - Lagos</li>
          <li>Tel: 0800 743 9256</li>
          <li>Email: info@littlelemon.com</li>
        </ul>
      </div>

      <div className="social-media">
        <a href="https://www.facebook.com/LittleLemon" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com/LittleLemon" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.instagram.com/LittleLemon" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
