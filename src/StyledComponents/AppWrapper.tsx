import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
}

const StyledAppWrapper = styled.div`
  padding: 85px;
  background: #e7f6ff;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`;

function AppWrapper({ children }: Props): ReactElement {
  return <StyledAppWrapper>{children}</StyledAppWrapper>;
}

export default AppWrapper;
