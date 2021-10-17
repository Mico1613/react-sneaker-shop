import React, { ReactElement } from "react";
import FavouritesPage from "./Pages/FavouritesPage";
import MainPage from "./Pages/MainPage";
import PurchasesPage from "./Pages/PurchasesPage";
import AppWrapper from "./StyledComponents/AppWrapper";
import { Route, Switch } from "react-router-dom";
import Error from "./Pages/Error";

// https://61606764faa03600179fba4e.mockapi.io/sneakers

function App(): ReactElement {
  return (
    <AppWrapper>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/purchases" component={PurchasesPage} />
        <Route exact path="/favourites" component={FavouritesPage} />
        <Route path="" component={Error} />
      </Switch>
    </AppWrapper>
  );
}

export default App;
