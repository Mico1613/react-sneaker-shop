interface favouritesState {}

const initialState: favouritesState = {};

export default (state = initialState, { type, payload }: any): favouritesState => {
  switch (type) {
    case "qwe":
      return { ...state, ...payload };

    default:
      return state;
  }
};
