import React, { ReactElement } from "react";
import styled from "styled-components";
import Flex from "../StyledComponents/Flex";
import Logo from "./Logo";
import Menu from "./Menu";

interface Props {}

const StyledHeader = styled.header`
  padding: 45px;
  user-select: none;
  text-align: center;
`;

const StyledHr = styled.hr`
  width: 100%;
  border: 1px solid #eaeaea;
`;

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
