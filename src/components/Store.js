import React, { useContext } from "react";

//context
import { ProductContext } from "../context/ProductContext";

//components
import Products from "./shared/Products";

//styles
import styles from "../css/Products.module.css";

const Store = () => {
  const products = useContext(ProductContext);
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Products key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
