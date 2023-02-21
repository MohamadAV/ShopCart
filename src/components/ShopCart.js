import React, { useContext } from "react";
import { Link } from "react-router-dom";

//context
import { CartContext } from "../context/CartContextProvider";

//components
import Cart from "./shared/Cart";

//css
import styles from "../css/ShopCart.module.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div >

      {state.selectedItems.length !==0 ? (
        <div className={styles.container}>
          <div className={styles.cart}>
            {state.selectedItems.map((item) => (
              <Cart key={item.id} data={item} />
            ))}
          </div>
          <div className={styles.counter}>
            {state.itemsCounter > 0 && (
              <div>
                <p>
                  <span className={styles.totalItem}>Total Items: </span>
                  {state.itemsCounter}
                </p>
                <p className={styles.totalPayment}>
                  <span >Total payments: </span><br/><br/>
                  {state.total} $
                </p>
                <div className={styles.buttons}>
                  <button
                    className={styles.checkoutBtn}
                    onClick={() => dispatch({ type: "CHECKOUT" })}
                  >
                    Check out
                  </button>
                  <button
                    className={styles.clearBtn}
                    onClick={() => dispatch({ type: "CLEAR" })}
                  >
                    Clear
                  </button>
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
        </div>
      ) : (
        <h3>there is no product in your bascket</h3>
      )}
    </div>
  );
};

export default ShopCart;
