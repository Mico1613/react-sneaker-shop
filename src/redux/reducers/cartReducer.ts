interface cartState {}

const initialState: cartState = {};

export default (state = initialState, { type, payload }:any): cartState => {
  switch (type) {
    case 'qwe':
      return { ...state, ...payload };

    default:
      return state;
  }
};
