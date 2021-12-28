import axios from "axios";
import { ISneaker } from "../../types";
import { AppDispatch } from "../store";

export const goodsOnLoading = {
  type: "ON_LOADING",
};
export const goodsLoaded = {
  type: "LOADED",
};

export const goodsLoadingBreakWithError = (payload: string) => ({
  type: "ON_ERROR",
  payload,
});

export const getData = (payload: ISneaker[]) => ({
  type: "GET_DATA",
  payload,
});

export const fetchAllGoods = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(goodsOnLoading);
    const response = await axios.get<ISneaker[]>(
      "https://61606764faa03600179fba4e.mockapi.io/sneakers"
    );
    const transformedData = response.data.map((i) => {
      return { ...i, liked: false, added: false };
    });
    dispatch(getData(transformedData));
    dispatch(goodsLoaded);
  } catch (error) {
    dispatch(goodsLoadingBreakWithError((error as Error).message));
  }
};

export const toggleLikedState = (payload: ISneaker) => ({
  type: "TOGGLE_LIKED_STATE",
  payload,
});
export const toggleAddedState = (payload: ISneaker) => ({
  type: "TOGGLE_ADDED_STATE",
  payload,
});
