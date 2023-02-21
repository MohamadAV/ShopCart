import React, { useContext } from "react";
import { Link } from "react-router-dom";
//conteext
import { CartContext } from "../../context/CartContextProvider";

//styles
import styles from "../../css/Navbar.module.css";

//icon
import shopIcon from "../../asset/icons/shop.svg";
import logo from "../../Images/logo.png";
import titleimgb from "../../Images/top-title-black.png";
import titleimgw from "../../Images/top-title-white.png";

const Navbar = () => {
  const { state } = useContext(CartContext);
  return (
    <div className={styles.container}>
      <div className={styles.bascketContainer}>
        <Link to="/cart">
          <img className={styles.basket} src={shopIcon} alt="basket" />
        </Link>
       
        <span>{state.itemsCounter}</span>
      </div>
 <img className={styles.titleimg} src={titleimgw} />
      <Link to="/product">
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
    </div>
  );
};

export default Navbar;
