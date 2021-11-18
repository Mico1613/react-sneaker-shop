interface IPurchases {}

const initialState: IPurchases = {};

export default (state = initialState, { type, payload }: any): IPurchases => {
  switch (type) {
    case "rt":
      return { ...state, ...payload };

    default:
      return state;
  }
};