interface IFavourites {}

const initialState: IFavourites = {};

export default (state = initialState, { type, payload }: any): IFavourites => {
  switch (type) {
    case "rt":
      return { ...state, ...payload };

    default:
      return state;
  }
};
