import styles from "./Cart.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import CartIcon from "components/icons/CartIcon";
import { RootState } from "store/store";

const Cart = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/currentCart");
  };

  return (
    <div className={styles.cartContainer} onClick={handleClick}>
      <p className={styles.itemsNumber}>{items.length}</p>
      <CartIcon />
    </div>
  );
};
export default Cart;
