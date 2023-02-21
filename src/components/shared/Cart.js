import React, { useContext } from "react";

//context
import { CartContext } from "../../context/CartContextProvider";

//functions
import { shorten } from "../../helpers/functions";

//icons
import trashIcon from "../../asset/icons/trash.svg";

//css
import styles from "../../css/Cart.module.css";

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);
  const { image, title, price, quantity } = props.data;
  return (
        <div className={styles.container}>
          <img className={styles.image} src={image} alt="product" />
          <div className={styles.details}>
            <div>
              <h3 className={styles.title}>{shorten(title)}</h3>
              <p>{price} $</p>
              <div></div>
              <div>
                {quantity > 1 ? (
                  <button
                    className={styles.decreasebtn}
                    onClick={() =>
                      dispatch({ type: "DECREASE", payload: props.data })
                    }
                  >
                    -
                  </button>
                ) : (
                  <button
                    className={styles.removebtn}
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", payload: props.data })
                    }
                  >
                    <img src={trashIcon} alt="trash"></img>
                  </button>
                )}
                <button className={styles.countbtn}>{quantity}</button>
                <button
                  className={styles.increasebtn}
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: props.data })
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className={styles.totalPrice}>
              <p>
                total price: <span>{(quantity * price).toFixed(2)} $</span>
              </p>
            </div>
          </div>
        </div>
      

  );
};

export default Cart;
