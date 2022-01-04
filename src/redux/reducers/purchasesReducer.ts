import { ISneaker } from "../../types";
import { ActionsPurchases } from "../../types/purchasesActionsTypes";

interface IPurchases {
  purchasesData: ISneaker[];
}

const initialState: IPurchases = {
  purchasesData: [],
};

export default (state = initialState, action: ActionsPurchases): IPurchases => {
  switch (action.type) {
    case "ADD_TO_PURCHASES":
      const filteredByUniqueSneakersArr = (): ISneaker[] => {
        let newArr: ISneaker[] = [];
        action.payload.forEach((i: ISneaker) => {
          if (
            !JSON.stringify(state.purchasesData).includes(JSON.stringify(i))
          ) {
            newArr.push(i);
          }
        });
        return newArr;
      };
      return {
        ...state,
        purchasesData: [
          ...state.purchasesData,
          ...filteredByUniqueSneakersArr(),
        ],
      };
    default:
      return state;
  }
};
