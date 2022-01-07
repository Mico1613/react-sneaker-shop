import { ISneaker } from ".";

interface IActionGetData {
  type: "GET_DATA";
  payload: ISneaker[];
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
interface IActionToggleLikedState {
  type: "TOGGLE_LIKED_STATE",
  payload: ISneaker
}
interface IActionToggleAddedState {
  type: "TOGGLE_ADDED_STATE",
  payload: ISneaker
}
interface IActionOnResetAddedState {
  type: "ON_RESET_ADDED_STATE",
}
export type ActionsGoods =
  | IActionGetData
  | IActionGoodsOnLoading
  | IActionGoodsLoaded
  | IActionGoodsLoadingBreakWithError
  | IActionToggleLikedState
  | IActionToggleAddedState
  | IActionOnResetAddedState;
