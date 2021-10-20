interface ICart {}

const initialState: ICart = {};

export default (state = initialState, { type, payload }:any): ICart => {
  switch (type) {
    case 'yu':
      return { ...state, ...payload };

    default:
      return state;
  }
};
