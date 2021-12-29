import { ISneaker } from "../../types";
import { ActionsCart } from "../../types/cartActionsTypes";

interface ICart {
  cartItems: ISneaker[];
  isCartOpened: boolean;
  generalSum: number;
}

const initialState: ICart = {
  isCartOpened: false,
  cartItems: [],
  generalSum: 0,
};


export default (state = initialState, action: ActionsCart): ICart => {
  switch (action.type) {
    case "ON_OPEN_CART":
      return { ...state, isCartOpened: true };
    case "ON_CLOSE_CART":
      return { ...state, isCartOpened: false };
    case "ADD_TO_CART":
      if (!state.cartItems.includes(action.payload)) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
      return { ...state };
    case "REMOVE_FROM_CART":
      const newArrAfterRemovingFromCart = state.cartItems.filter(
        (i) => i.id !== action.payload.id
      );
      return { ...state, cartItems: newArrAfterRemovingFromCart };
    default:
      return state;
  }
};
