//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const fName = "Gayan";
const lName = "Kalinga";
const myLuckyNumber = 7;
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">
      {fName} {lName} 's Family
    </h1>
    <ul>
      <li>Gayan</li>
      <li>Dulashi</li>
      <li>Miheli</li>
    </ul>
    <div>
      <img
        alt="this is a d"
        className="food-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlWKHTu_nGZiho0pz1CFAsqZ5tjWnbM5l2Mw&usqp=CAU"
      ></img>
      <img
        alt="this is a c"
        className="food-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcadlHaCuNa63TpyxD23cIDRl3GEJguCUlKQ&usqp=CAU"
      ></img>
      <img
        alt="this is a b"
        className="food-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo27Gf3z4ArRXiZD3ykag7aNSpfFjP55emog&usqp=CAU"
      ></img>
      <img alt="this is a a" src="https://picsum.photos/200" />
    </div>
    <p> My Lucky Number is {myLuckyNumber}</p>
  </div>,
  document.getElementById("root")
);
