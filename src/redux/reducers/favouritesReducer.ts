import { ISneaker } from "../../types";

interface IFavourites {
  favouritesItems: ISneaker[];
}

const initialState: IFavourites = {
  favouritesItems: [],
};

export default (state = initialState, { type, payload }: any): IFavourites => {
  switch (type) {
    case "ADD_TO_FAVOURITES":
      if (!state.favouritesItems.includes(payload)) {
        return {
          ...state,
          favouritesItems: [...state.favouritesItems, payload],
        };
      }
      return { ...state };
    case "REMOVE_FROM_FAVOURITES":
      const newArrAfterRemovingFromFavourites = state.favouritesItems.filter(
        (i) => i.id !== payload.id
      );
      return { ...state, favouritesItems: newArrAfterRemovingFromFavourites };
    default:
      return state;
  }
};
