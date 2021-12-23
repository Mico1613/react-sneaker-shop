interface IActionOnOpenCart {
  type: "ON_OPEN_CART";
}
interface IActionOnCloseCart {
  type: "ON_CLOSE_CART";
}

export type ActionsCart = IActionOnOpenCart | IActionOnCloseCart;
