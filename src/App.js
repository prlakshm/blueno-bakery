import "./styles/App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div className="App">
      <div class="left">
      <h1>Blueno's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      <div class="bakery-items">
      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem name={item.name} description={item.description} price={item.price} image={item.image}/>// replace with BakeryItem component
      ))}
      </div>
      </div>
      <div class="right">
        <h2>Cart</h2>
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
