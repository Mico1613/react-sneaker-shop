import { ISneaker } from ".";

interface IActionOnOpenCart {
  type: "ON_OPEN_CART";
}
interface IActionOnCloseCart {
  type: "ON_CLOSE_CART";
}
interface IActionAddToCart {
  type: "ADD_TO_CART";
  payload: ISneaker;
}

interface IActionRemoveFromCart {
  type: "REMOVE_FROM_CART";
  payload: ISneaker;
}
interface IActionOnResetCart {
  type: "ON_RESET_CART";
}
export type ActionsCart =
  | IActionOnOpenCart
  | IActionOnCloseCart
  | IActionAddToCart
  | IActionRemoveFromCart
  | IActionOnResetCart;
