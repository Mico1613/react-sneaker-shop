import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import goodsReducer from "./reducers/goodsReducer";
import cartReducer from "./reducers/cartReducer";
import favouritesReducer from "./reducers/favouritesReducer";
import purchasesReducer from "./reducers/purchasesReducer";

const rootReducer = combineReducers({
  goodsReducer,
  cartReducer,
  favouritesReducer,
  purchasesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
