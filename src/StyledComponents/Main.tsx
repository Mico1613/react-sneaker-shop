import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
}

export const StyledMain = styled.main`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 20px;
`;

function Main({ children }: Props): ReactElement {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
