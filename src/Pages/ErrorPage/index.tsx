import React, { ReactElement } from "react";
import { StyledError } from "../../StyledComponents/ErrorPageComponent";


function ErrorPage(): ReactElement {
  return (
    <StyledError>
      404
      <br /> {"Not Found :("}
    </StyledError>
  );
}

export default ErrorPage;
