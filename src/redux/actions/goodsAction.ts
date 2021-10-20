import axios from "axios";
import { IGoodsData } from "../../types";
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

export const getData = (payload: IGoodsData[]) => ({
  type: "GET_DATA",
  payload,
});

export const fetchAllGoods = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(goodsOnLoading);
    const response = await axios.get<IGoodsData[]>(
      "https://61606764faa03600179fba4e.mockapi.io/sneakers"
    );
    dispatch(getData(response.data));
    dispatch(goodsLoaded);
  } catch (error) {
    dispatch(goodsLoadingBreakWithError((error as Error).message));
  }
};
