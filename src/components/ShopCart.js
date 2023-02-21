import React, { useContext } from "react";
import { Link } from 'react-router-dom';

//context
import { CartContext } from "../context/CartContextProvider";

//components
import Cart from "./shared/Cart";


const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <div>
        {state.selectedItems.map((item) => (
          <Cart key={item.id} data={item} />
        ))}
      </div>
      {state.itemsCounter > 0 && (
        <div>
          <p>
            <span>Total Items: </span>
            {state.itemsCounter}
          </p>
          <p>
            <span>Total payments: </span>
            {state.total}
          </p>
          <div>
            <button onClick={() => dispatch({ type: "CHECKOUT" })}>
              Check out
            </button>
            <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
          </div>
        </div>
      )}
      {state.checkout && (
        <div>
          <h3>Checkout Successfully</h3>
          <Link to="/products">Buy more</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;
