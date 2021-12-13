import React, { ReactElement } from "react";
import OpenedCart from "../../Components/OpenedCart";
import SneakersBlock from "../../Components/SneakersBlock";
import StoriesBlock from "../../Components/StoriesBlock";
import Container from "../../StyledComponents/Container";

interface Props {}

function MainPage({}: Props): ReactElement {
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
