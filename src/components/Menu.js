import React from 'react';
import ReactDOM from 'reactDOM';

function Menu(props) {
  return (
    <div>
      <h3>Name :{props.name}</h3>
      <p>
        <img src={props.img} alt="avtar_img" />
      </p>
      <p>Price: {props.price}</p>
    </div>
  );
}
export default Menu;
