import styles from "./Button.module.css";
import { useState } from "react";
import { addToCart, removeFromCart } from "services/api";
import { useDispatch } from "react-redux";
import { createCart } from "components/button/reducer";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import axios from "axios";

const Button = ({ productName, productPrice, productID }) => {
  const dispatch = useDispatch();
  const { id, items } = useSelector((state: RootState) => state.cart);
  const itemNotInCard = !!!items.find(
    (item) => item.productName === productName && item.id === productID
  );
  const fetchCart = async () => {
    const apiUrl: string = `${process.env.NEXT_PUBLIC_API_URL}/cart`;
    const { data } = await axios.post(apiUrl);
    dispatch(createCart(data.id));
  };

  const addOrRemoveToBasket = async () => {
    if (id === "0") {
      await fetchCart();
    }
    if (itemNotInCard) {
      addToCart({
        productName: productName,
        price: productPrice,
        id: productID,
      });
    } else {
      removeFromCart(productID);
    }
  };
  return (
    <button className={styles.button} onClick={addOrRemoveToBasket}>
      {itemNotInCard ? "Add to cart" : "Remove from cart"}
    </button>
  );
};
export default Button;
