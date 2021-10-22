import React, { ReactElement } from "react";
import Header from "../../Components/Header";
import StoriesBlock from "../../Components/StoriesBlock";
import Container from "../../StyledComponents/Container";
import Flex from "../../StyledComponents/Flex";
import Main from "../../StyledComponents/Main";

interface Props {}

function MainPage({}: Props): ReactElement {
  return (
    <Main>
      <Header />
      <Container>
        <Flex direction="column" align="center">
          <StoriesBlock />
        </Flex>
      </Container>
    </Main>
  );
}

export default MainPage;
