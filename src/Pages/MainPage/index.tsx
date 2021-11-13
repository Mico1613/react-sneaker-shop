import React, { ReactElement } from "react";
import Header from "../../Components/Header";
import SneakersBlock from "../../Components/SneakersBlock";
import StoriesBlock from "../../Components/StoriesBlock";
import Container from "../../StyledComponents/Container";
import Flex from "../../StyledComponents/Flex";
import Main from "../../StyledComponents/Main";

interface Props {}

function MainPage({}: Props): ReactElement {
  return (
      <Container>
        <StoriesBlock />
        <SneakersBlock />
      </Container>

  );
}

export default MainPage;
