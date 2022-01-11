import React, { ReactElement } from "react";
import SneakersBlock from "../../Components/SneakersBlock";
import StoriesBlock from "../../Components/StoriesBlock";
import Container from "../../StyledComponents/Container";

function MainPage(): ReactElement {

  return (
    <>
      <Container>
        <StoriesBlock />
        <SneakersBlock />
      </Container>
    </>
  );
}

export default MainPage;
