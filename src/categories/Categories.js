import React from "react";

function Categories() {
  const aviableCategories = [
    "Smartphones and Gadgets",
    "Laptops and Computers",
    "Televisions and Accessories",
    "Home Appliances",
    "Beauty and Health",
    "Sports and Tourism",
    "Home Products",
    "Kids' Products",
    "Toys and Games",
    "Car Electronics",
    "Stationery and Books",
    "Food and Beverages",
    "Tools and Repairs",
    "Furniture",
    "Fashion and Accessories",
  ];


  const eventListener = (category) => {
    console.log(category);
  };
    return (
      <div className="">
        <ul>
          {aviableCategories.map((category, index) => (
            <li key={index}>
              <button onClick={() => eventListener(category)}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Categories