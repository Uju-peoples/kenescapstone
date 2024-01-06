import React from 'react';

function Header() {
    return (
    <>
      <header className="header-container">
        <NavLink to = "/">
        <img src="C:\Users\kemma\Desktop\kenescapstone\kenescapstone\public\icons_assets\Little Lemon Logo.svg" alt="Little Lemon Logo" />
          <h1>Little Lemon</h1>
        </NavLink>
        <nav>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="#">About</NavLink></li>
                <li><NavLink to="#">Menu</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
                <li><NavLink to="#">Order Online</NavLink></li>
                <li><NavLink to="#">Login</NavLink></li>
            </ul>
        </nav>
        <div className="hamburger" onClick = {handleClick}>
            {click ? (<AiOutlineClose size={20} style={{ color: "#333333"}}/>) : (<AiOutlineMenu size={30} style={{ color: "#333333", borderLeft: "1px solid #333333", paddingLeft: "10px", height: "20px"}}/>)}  
        </div>
      </header>
    </>
      );
};


export default Header;