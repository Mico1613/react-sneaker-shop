import { ISneaker } from "../../types";

export const onOpenCart = {
  type: "ON_OPEN_CART",
};

export const onCloseCart = {
  type: "ON_CLOSE_CART",
};

export const addToCart = (item: ISneaker) => ({
  type: "ADD_TO_CART",
  payload: item,
});

export const removeFromCart = (item: ISneaker) => ({
  type: "REMOVE_FROM_CART",
  payload: item,
});
