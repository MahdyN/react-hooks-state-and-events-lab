import React, {useState} from "react";

function Item({ name, category }) {

    const [status, setStatus] = useState("")       // We set the initial state of status to an empty string to signify the absence of a class in the list item

    function handleClick(event) {
      if(event.target.innerText === "Add to Cart"){   // this call back function will compare the inner text of the button to "Add to Cart" if its true it will change the class of the list item to "in-cart"
        setStatus("in-cart")
      }
      else {                          // if the button is pressed again while it is in cart, it will execute this code block and revert the state of status to an empty string
          setStatus("")
      }
    }

  return (   // The ternary expression will return the "Add to Cart" expression upon initial render, we add a click event to a call back function, the call back function will change the state of status to in-cart, changing the class of the list item as well as displaying the false expression in the ternary "Remove from Cart"
    <li className={status}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={(event) => handleClick (event)} className="add">{status === "" ? "Add to Cart" :"Remove From Cart" }</button>
    </li>
  );
}

export default Item;
