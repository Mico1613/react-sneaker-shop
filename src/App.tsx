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

function App(): ReactElement {
  const dispatch = useAppDispatch();
  const { goods, isLoading, errorMessage } = useAppSelector(
    (state) => state.goodsReducer
  );
  console.log(goods, isLoading, errorMessage);

  React.useEffect(() => {
    dispatch(fetchAllGoods());
  }, []);

  return (
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
  );
}

export default App;
