import React, { ReactElement } from "react";
import FavouritesPage from "./Pages/FavouritesPage";
import MainPage from "./Pages/MainPage";
import PurchasesPage from "./Pages/PurchasesPage";
import AppWrapper from "./StyledComponents/AppWrapper";
import { Route, Switch } from "react-router-dom";
import Error from "./Pages/ErrorPage";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { fetchAllGoods } from "./redux/actions/goodsAction";
import Header from "./Components/Header";
import Main from "./StyledComponents/Main";
import OpenedCart from "./Components/OpenedCart";
import { OpenedCartStyles } from "./utils/openedCartStyles";

function App(): ReactElement {
  const dispatch = useAppDispatch();
  const { isCartOpened } = useAppSelector(({ cartReducer }) => cartReducer);

  React.useEffect(() => {
    dispatch(fetchAllGoods());
  }, [dispatch]);
  
  return (
    <>
      <OpenedCartStyles isCartOpened={isCartOpened} />
      {isCartOpened ? <OpenedCart /> : null}
      <AppWrapper>
        <Main>
          <Header />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/purchases" component={PurchasesPage} />
            <Route exact path="/favourites" component={FavouritesPage} />
            <Route path="" component={Error} />
          </Switch>
        </Main>
      </AppWrapper>
    </>
  );
}

export default App;
