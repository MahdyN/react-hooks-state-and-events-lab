import React from "react";
import { useState } from "react/cjs/react.development";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCategory, setCategory] = useState("All")
  
  function handleChange(category) {    // when a category is selected the setter function will change the state of selectedcategory to the value of the filter we chose in the select drop down
      setCategory(category)            // the component will re-render with this new internal state and create a new SelectedList based on this
  }

  const selectedList =  items.filter((item) => {
    if(selectedCategory === "All") {                  // Upon first render the state of selectedCategory is All and this filter will return every element in the items array
      return true 
    }
    else{                                            // when a category is selected the component re-renders and filters the list items that have a category that matches the selectedCategory
      return item.category === selectedCategory
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange ={(event) => handleChange(event.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
