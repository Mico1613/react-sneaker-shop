import React, { ReactElement } from "react";
import styled from "styled-components";
import Flex from "../../StyledComponents/Flex";
import { StyledHeader, StyledHr } from "../../StyledComponents/HeaderComponent";
import Logo from "../Logo";
import Menu from "../Menu";

interface Props {}



function Header({}: Props): ReactElement {
  return (
    <>
      <StyledHeader>
        <Flex justify="space-between" align="center">
          <Logo />
          <Menu />
        </Flex>
      </StyledHeader>
      <StyledHr />
    </>
  );
}

export default Header;
