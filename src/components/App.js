import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [dark, setDark] = useState(false)     // Initially setting state of dark to false

  const appClass = dark ? "App dark" : "App light"

function handleClick() {   // Upon pressing the button this callback function will run and the setter function will flip the boolean using the bang operator, toggling between dark and light mode 
  setDark(!dark)
}

  return (                    // Whenever the Dark Mode button is clicked a call back function is invoked
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick ={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
