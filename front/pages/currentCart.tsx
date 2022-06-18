import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { getCurrentCart } from "services/api";
import { RootState } from "store/store";
import Card from "components/card/Card";
import { Cart } from "components/button/reducer";
import styles from "../styles/currentCart.module.css";

const CartPage = () => {
  const { id } = useSelector((state: RootState) => state.cart);
  const [currentCart, setCurrentCart] = useState({} as Cart);
  const totalPrice = useRef(0);

  useEffect(() => {
    const fetchCurrentCart = async () => {
      const currentCart = await getCurrentCart(id);
      currentCart.items.forEach((item) => {
        console.log(item);
        totalPrice.current += item.price;
        console.log(totalPrice);
      });
      console.log(totalPrice.current);
      setCurrentCart(currentCart);
    };
    fetchCurrentCart();
  }, [setCurrentCart]);

  return (
    <div>
      {currentCart?.items?.map((item, i) => {
        return (
          <Card key={`item.productName-${i}`}>
            <p>{item.productName}</p>
            <p>{item.price}</p>
          </Card>
        );
      })}
      <div className={styles.totalPrice}>
        <p>TOTAL</p>
        <p>$ {totalPrice.current.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
