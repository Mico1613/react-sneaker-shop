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
      return { ...state, favouritesItems: [...state.favouritesItems, payload] };
    case 'REMOVE_FROM_FAVOURITES':
      return {...state}
    default:
      return state;
  }
};
