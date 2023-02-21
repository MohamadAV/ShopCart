import React, { useContext } from "react";
import { Link } from "react-router-dom";

//function
import { shorten, isInCart, quantityCount } from "../../helpers/functions";

//context
import { CartContext } from "./../../context/CartContextProvider";

//icons
import trasIcon from "../../asset/icons/trash.svg";

//styles
import styles from "../../css/Products.module.css";

const Products = ({ productData }) => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <img src={productData.image} alt="products" style={{ width: 200 }} />
      <div className={styles.productDetails}>
        <h3 className={styles.productname}>{shorten(productData.title)}</h3>
        <p className={styles.productPrice}>{productData.price}</p>
        </div>
        <div className={styles.productButtons}>
          <button className={styles.detailbtn}><Link to={`/products/${productData.id}`}>Details</Link></button>
          <div>
            {isInCart(state, productData.id) ? (
              <button className={styles.increasebtn}
                onClick={() =>
                  dispatch({ type: "INCREASE", payload: productData })
                }
              >
                +
              </button>
            ) : (
              <button className={styles.addbtn}
                onClick={() =>
                  dispatch({ type: "ADD_ITEM", payload: productData })
                }
              >
                Add to cart
              </button>
            )}
            {quantityCount(state, productData.id) === 1 && (
              <button className={styles.removebtn} 
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
              >
                <img src={trasIcon} style={{ width: "15px" }} alt="" />
              </button>
            )}
            {quantityCount(state, productData.id) > 1 && (
              <button className={styles.decreasebtn}
                onClick={() => 
                  dispatch({ type: "DECREASE", payload: productData })
                }
              >
                -
              </button>
            )}
          
        </div>
      </div>
    </div>
  );
};

export default Products;
