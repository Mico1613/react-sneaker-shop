import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

export const StyledMain = styled.main`
  max-width: 1080px;
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 20px;
  margin: 0 auto;
`;

function Main({ children }: Props): ReactElement {
  return <StyledMain>{children}</StyledMain>;
}

export default Main;
