interface goodsState {
  goods: any[];
}

const initialState: goodsState = {
  goods: [],
};

export default (state = initialState, { type, payload }:any): goodsState => {
  switch (type) {
    case 'qwe':
      return { ...state, ...payload };

    default:
      return state;
  }
};
