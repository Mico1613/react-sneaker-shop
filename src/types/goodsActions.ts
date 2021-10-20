import { IGoodsData } from ".";

interface IActionGetData {
  type: "GET_DATA";
  payload: IGoodsData[];
}
interface IActionGoodsOnLoading {
  type: "ON_LOADING";
}
interface IActionGoodsLoaded {
  type: "LOADED";
}
interface IActionGoodsLoadingBreakWithError {
  type: "ON_ERROR";
  payload: string;
}

export type ActionsGoods =
  | IActionGetData
  | IActionGoodsOnLoading
  | IActionGoodsLoaded
  | IActionGoodsLoadingBreakWithError;
