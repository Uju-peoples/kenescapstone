import React from 'react';

function Footer() {
  return (
    <footer>
      <img class="logo" src="path/to/your-logo.png" alt="Restaurant Logo"/>
  
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Menu</a></li>
      <li><a href="#">Reservation</a></li>
      <li><a href="#">Order Online</a></li>
      <li><a href="#">Login</a></li>
    </ul>
  </nav>
  
  <div class="contact-info">
    <p>Address: Your Restaurant Address</p>
    <p>Phone: Your Phone Number</p>
    <p>Email: your@email.com</p>
  </div>
  
  <div class="social-media">
    <a href="#" target="_blank">Facebook</a>
    <a href="#" target="_blank">Twitter</a>
    <a href="#" target="_blank">Instagram</a>
  </div>
    </footer>
  );
};

export default Footer;
