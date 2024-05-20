import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";


let productsHTMl = "";
products.forEach((products) => {
  productsHTMl += `<div class="product-container">
  <div class="product-image-container">
    <img class="product-image"
      src="${products.image}">
  </div>

  <div class="product-name limit-text-to-2-lines">
    ${products.name}
  </div>

  <div class="product-rating-container">
    <img class="product-rating-stars"
      src="images/ratings/rating-${products.rating.stars * 10}.png">
    <div class="product-rating-count link-primary">
      ${products.rating.count}
    </div>
  </div>

  <div class="product-price">
    $${formatCurrency(products.priceCents)}
  </div>

  <div class="product-quantity-container">
    <select>
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>

  <div class="product-spacer"></div>

  <div class="added-to-cart">
    <img src="images/icons/checkmark.png">
    Added
  </div>

  <button class="add-to-cart-button button-primary" data-product-id = "${
    products.id
  }">
    Add to Cart
  </button>
</div>`;
});



function updateCartQuantity(){
  
    
    let cartQuantity = 0;
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });
    document.querySelector(".cart-quantity").innerHTML = cartQuantity;

}

document.querySelector(".products-grid").innerHTML = productsHTMl;
document.querySelectorAll(".add-to-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addToCart(productId);
    updateCartQuantity()
    
  });
});
