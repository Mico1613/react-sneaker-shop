import React, { ReactElement } from "react";
import styled from "styled-components";
import { StyledMain } from "../../StyledComponents/Main";

interface Props {}

const StyledError = styled(StyledMain)`
  font-size: 48px;
  font-weight: bold;
  height: calc(100vh - 170px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  user-select: none;
`;

function Error({}: Props): ReactElement {
  return (
    <StyledError>
      404
      <br /> Not Found :(
    </StyledError>
  );
}

export default Error;
