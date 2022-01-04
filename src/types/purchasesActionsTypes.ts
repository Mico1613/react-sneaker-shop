import { ISneaker } from ".";

interface IActionAddToPurchases {
  type: "ADD_TO_PURCHASES";
  payload: ISneaker[];
}

export type ActionsPurchases = IActionAddToPurchases;
