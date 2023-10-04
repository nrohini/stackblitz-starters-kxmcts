import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Menu from './components/Menu';
import menuItems from './menuItems';

export default function App() {
  return (
    <div>
      <h1>My Favorite Food </h1>
      <Menu
        /* passing prop in components         */
        name="Ice-cream"
        /* passing prop in components   from const array       */
        img={menuItems[0].imgURL}
        price={menuItems[0].price}
      />
      <Menu
        name={menuItems[1].name}
        img={menuItems[1].imgURL}
        price={menuItems[1].price}
      />
      <Menu
        name={menuItems[0].name}
        img={menuItems[0].imgURL}
        price={menuItems[0].price}
      />
    </div>
  );
}
