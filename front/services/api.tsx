import { cartSlice } from "components/button/reducer";
import axios from "axios";
import { createCart } from "components/button/reducer";
import { store } from "store/store";

export const createCartFetch = async (dispatch) => {
  const apiUrl: string = `${process.env.NEXT_PUBLIC_API_URL}/cart`;
  const { data } = await axios.post(apiUrl);
  dispatch(createCart(data?.id));
};

export const getCurrentCart = async (id) => {
  const apiUrl: string = `${process.env.NEXT_PUBLIC_API_URL}/cart/${id}`;
  const { data } = await axios.get(apiUrl);
  return data;
};

export const addToCart = async (product) => {
  const currentState = store.getState();
  const apiUrl: string = `${process.env.NEXT_PUBLIC_API_URL}/cart/${currentState.cart.id}`;
  const { data } = await axios.post(apiUrl, { items: [product] });
  if (data) {
    store.dispatch(cartSlice.actions.changeCart(data));
  }
};

export const removeFromCart = async (objectID) => {
  const currentState = store.getState();
  const apiUrl: string = `${process.env.NEXT_PUBLIC_API_URL}/cart/${currentState.cart.id}/removeProduct/${objectID}`;
  const { data } = await axios.post(apiUrl);
  if (data) {
    store.dispatch(cartSlice.actions.changeCart(data));
  }
};
