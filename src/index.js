//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

import React from "react";
import ReactDOM from "react-dom";

const myLuckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>My Family</h1>
    <ul>
      <li>Gayan</li>
      <li>Dulashi</li>
      <li>Miheli</li>
    </ul>
    <p> My Lucky Number is {myLuckyNumber}</p>
  </div>,
  document.getElementById("root")
);
