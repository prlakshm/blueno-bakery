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

  // Use useState to create a state variable to hold the state of the cart
  const [cart, setCart] = useState([]);

  // Calculate total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="App">
      <body>
        <div class="left">
          <h1>Blueno's Bakery</h1>{" "}
          {/* TODO: personalize your bakery (if you want) */}
          <div class="bakery-items">
            {bakeryData.map(
              (
                item,
                index // TODO: map bakeryData to BakeryItem components
              ) => (
                <BakeryItem
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  cart={cart}
                  setCart={setCart}
                /> // replace with BakeryItem component
              )
            )}
          </div>
        </div>
        <div className="right">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            // If cart is empty, display a message
            <div className="message">
            <p>Nothing here just yet!</p>
            </div>
          ) : (
            // If cart is not empty, render cart items and total price
            <>
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <p>
                    {item.name} &times; {item.quantity}
                  </p>
                  <p>${item.price}</p>
                </div>
              ))}
              <div className="total">
                <p>Total:</p>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
            </>
          )}
        </div>
      </body>
    </div>
  );
}

export default App;
