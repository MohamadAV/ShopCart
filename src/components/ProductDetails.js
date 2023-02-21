import { Link, useParams } from "react-router-dom";
import { useContext } from "react";

//context
import { ProductContext } from "./../context/ProductContext";

const ProductDetails = () => {
  const data = useContext(ProductContext);
  const id = useParams().id;
  const product = data[id - 1];
  const { image, title, description, price, category } = product;

  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <span>category: </span>
          {category}
        </p>
        <div>
          <span>{price} $</span>
          <Link to="/product">Back to shop</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
