import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
  bgc?: string;
  radius?: string;
  padding?: string;
  margin?: string;
  onClick?: any;
}

const StyledButton = styled.button<Props>`
  background-color: ${({ bgc }) => bgc || ""};
  border-radius: ${({ radius }) => radius || ""};
  padding: ${({ padding }) => padding || ""};
  margin: ${({ margin }) => margin || ""};
`;

function Button(props: Props): ReactElement {
  return <StyledButton {...props} onClick={props.onClick}>{props.children}</StyledButton>;
}

export default Button;
