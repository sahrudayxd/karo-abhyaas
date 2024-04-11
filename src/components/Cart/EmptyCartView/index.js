import { Link } from "react-router-dom";

import "./index.css";

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
      className="cart-empty-image"
      alt="cart empty"
    />
    <h1 className="cart-empty-heading">Your Cart Is Empty</h1>

    <Link to="/products">
      <button type="button" className="shop-now-btn">
        Go To Products
      </button>
    </Link>
  </div>
);

export default EmptyCartView;
