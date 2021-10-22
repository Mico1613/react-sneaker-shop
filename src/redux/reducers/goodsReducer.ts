import { IGoodsData } from "../../types";
import { ActionsGoods } from "../../types/goodsActionsTypes";

interface IGoods {
  goods: IGoodsData[];
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
    default:
      return state;
  }
};
