import React, { ReactElement } from "react";
import FavouritesPage from "./Pages/FavouritesPage";
import MainPage from "./Pages/MainPage";
import PurchasesPage from "./Pages/PurchasesPage";
import AppWrapper from "./StyledComponents/AppWrapper";

// https://61606764faa03600179fba4e.mockapi.io/sneakers

function App(): ReactElement {
  return (
    <AppWrapper>
      <MainPage />
      <PurchasesPage />
      <FavouritesPage />
    </AppWrapper>
  );
}

export default App;
