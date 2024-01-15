import React from 'react';
import Swal from 'sweetalert2';
import Dessert1 from "./styles/greek-salad.jpg";
import Dessert2 from "./styles/bruchetta.svg";
import Dessert3 from "./styles/lemon-dessert.jpg";

const Menu = () => {
  const handleOrder = (title) => {
    console.log(title, "menu item is clicked");
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Order it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Ordered!',
          'Your Order has been processed.',
          'success'
        );
      }
    });
  };

  const specialMenus = [
    {
      image: Dessert1,
      title: "Greek Salad",
      price: "$12.99",
      description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
    },
    {
      image: Dessert2,
      title: "Bruschetta",
      price: "$5.99",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
    },
    {
      image: Dessert3,
      title: "Lemon Dessert",
      price: "$5.00",
      description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
    }
  ];

  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This week's specials!</h2>
      </div>
      <div className='section-right'>
        <button className='orderMenuBtn' onClick={() => handleOrder(specialMenus[0].title)}>Order Menu</button>
      </div>
      <div className='horizontal-menu-container'>
        {specialMenus.map((menu, index) => (
          <div className='menu-card' key={index}>
            <img src={menu.image} alt='Special dessert' />
            <div className='menu-content'>
              <h5>{menu.title}</h5>
              <p>{menu.price}</p>
              <p>{menu.description}</p>
              <button className='orderBtn' onClick={() => handleOrder(menu.title)}>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
