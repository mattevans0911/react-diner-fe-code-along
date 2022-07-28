import React, { useState, useEffect } from "react";
import FoodItem from "./FoodItem";

const Menu = (props) => {
  const [allFoodItems, setFoodItems] = useState([]);
  const url = props.type === "breakfast" ? "breakfast" : "lunch";
  const getAllFoodItems = () => {
    fetch(`http://127.0.0.1:5000/food/get/${url}`)
      .then((res) => res.json())
      .then((res) => setFoodItems(res));
  };

  const renderAllItems = () => {
    //maps through the item in our database and displays them all on the screen.
    return allFoodItems.map((item) => {
      //props.type == "dinner"
      // ? (item.price = String(Number(item.price) + 3))
      //  : null;
      return (
        <FoodItem
          menu={props.type}
          selectFoodItem={props.selectFoodItem}
          FoodItem={item}
        />
      );
    });
  };

  useEffect(() => {
    getAllFoodItems();
  }, []);

  return (
    <div className="menu-container">
      <h1>{props.type.toUpperCase()}</h1>
      {renderAllItems()}
    </div>
  );
};

export default Menu;
