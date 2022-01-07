import { ISneaker } from "../../types";
import { ActionsGoods } from "../../types/goodsActionsTypes";

interface IGoods {
  goods: ISneaker[];
  isLoading: boolean;
  errorMessage: string;
}

const initialState: IGoods = {
  goods: [],
  isLoading: false,
  errorMessage: "",
};

export default (state = initialState, action: ActionsGoods): IGoods => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, goods: [...state.goods, ...action.payload] };
    case "ON_LOADING":
      return { ...state, isLoading: true };
    case "LOADED":
      return { ...state, isLoading: false };
    case "ON_ERROR":
      return { ...state, errorMessage: action.payload };
    case "TOGGLE_LIKED_STATE":
      const transformedByLikedStateToggleArray = state.goods.map((i) => {
        if (i.id === action.payload.id) {
          return { ...i, liked: !i.liked };
        } else return i;
      });
      return { ...state, goods: transformedByLikedStateToggleArray };
    case "TOGGLE_ADDED_STATE":
      const transformedByAddedStateToggleArray = state.goods.map((i) => {
        if (i.id === action.payload.id) {
          return { ...i, added: !i.added };
        } else return i;
      });
      return { ...state, goods: transformedByAddedStateToggleArray };
    case "ON_RESET_ADDED_STATE":
      const resettedAddedArr = state.goods.map((i) => {
        return { ...i, added: false };
      });
      return { ...state, goods: resettedAddedArr };
    default:
      return state;
  }
};
