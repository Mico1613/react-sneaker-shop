import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
}

const StyledContainer = styled.div`
  width: 100%;
  padding: 45px 60px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding: 15px 30px;
  }
`;

function Container({ children }: Props): ReactElement {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
