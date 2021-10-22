import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
}

const StyledContainer = styled.div`
  width: 100%;
  padding: 45px 60px;
`;

function Container({ children }: Props): ReactElement {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
