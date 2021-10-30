import React, { ReactElement } from "react";
import { StyledError } from "../../StyledComponents/ErrorPageComponent";

interface Props {}



function ErrorPage({}: Props): ReactElement {
  return (
    <StyledError>
      404
      <br /> Not Found :(
    </StyledError>
  );
}

export default ErrorPage;
