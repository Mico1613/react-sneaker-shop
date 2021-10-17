import React, { ReactElement } from "react";
import styled from "styled-components";
import Header from "../../Components/Header";
import Main from "../../StyledComponents/Main";

interface Props { }


function MainPage({}: Props): ReactElement {
  return (
    <Main>
      <Header />
    </Main>
  );
}

export default MainPage;
