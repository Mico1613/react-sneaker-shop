import { ISneaker } from "../../types";

export const addToPurchases = (payload: ISneaker[]) => ({
  type: "ADD_TO_PURCHASES",
  payload: payload,
});
