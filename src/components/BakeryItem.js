// TODO: create a component that displays a single bakery item
import "../styles/BakeryItem.css";


export default function BakeryItem(props) {
    const {name, description, price, image} = props;
    return(
        <div class="item">
            <div class="img-wrapper">
            <img src={image} alt={name + "Image"}/>
            </div>
            <h3>{name}</h3>
            <p>{description}</p>

            <div class="bottom-nav">
            <p>${price}</p>
            <button class="cart-button">Add to Cart</button>
            </div>
        </div>
    );
}