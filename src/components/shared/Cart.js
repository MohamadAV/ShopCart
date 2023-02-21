import React, { useContext } from "react";

//context
import { CartContext } from "../../context/CartContextProvider";

//functions
import { shorten } from "../../helpers/functions";

//icons
import trashIcon from "../../asset/icons/trash.svg";

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);
  const { image, title, price, quantity } = props.data;
  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
        <div>
          <span>{quantity}</span>
        </div>
        <div>
          {quantity > 1 ? (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
            >
              -
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
            >
              <img src={trashIcon} alt="trash"></img>
            </button>
          )}
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
