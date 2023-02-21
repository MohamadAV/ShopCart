import { Link, useParams } from "react-router-dom";
import { useContext } from "react";

//context
import { ProductContext } from "./../context/ProductContext";
import styles from "../css/ProductDetails.module.css";

const ProductDetails = () => {
  const data = useContext(ProductContext);
  const id = useParams().id;
  const product = data[id - 1];
  const { image, title, description, price, category } = product;

  return (
    <div className={styles.cotainer}>
      <img className={styles.productImage} src={image} alt="product" />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.description}>
          <p>{description}</p>
          <p className={styles.category}>
            <span>category</span>: 
            {category}
          </p>
          <div className={styles.priceBox}>
            <span className={styles.price}>{price} $</span>
          </div>
          <div className={styles.backBtnContainer}>
            <Link className={styles.backbtn} to="/product">Back to shop</Link>
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
