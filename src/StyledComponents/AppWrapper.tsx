import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
}

const StyledAppWrapper = styled.div`
  padding: 85px;
  background: #e7f6ff;
  min-height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding: 35px;
  }
  @media screen and (max-width: 640px) {
    padding: 10px;
  }
`;

function AppWrapper({ children }: Props): ReactElement {
  return <StyledAppWrapper>{children}</StyledAppWrapper>;
}

export default AppWrapper;
