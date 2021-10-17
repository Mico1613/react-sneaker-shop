import React, { ReactElement } from "react";
import Flex from "../StyledComponents/Flex";
import Logo from "./Logo";
import Menu from "./Menu";


interface Props {}

function Header({}: Props): ReactElement {
  return (
    <header>
      <Flex justify="space-between">
        <Logo />
        <Menu />
      </Flex>
    </header>
  );
}

export default Header;
