import { ActionsCart } from "../../types/cartActionsTypes";

interface ICart {
  isCartOpened: boolean;
}

const initialState: ICart = {
  isCartOpened: false,
};

export default (state = initialState, action: ActionsCart): ICart => {
  switch (action.type) {
    case "ON_OPEN_CART":
      return { ...state, isCartOpened: true };
    default:
      return state;
  }
};
