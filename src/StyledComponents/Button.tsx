import React, { ReactElement, SyntheticEvent } from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
  bgc?: string;
  radius?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  onClick?: (e?: SyntheticEvent) => void;
}

const StyledButton = styled.button<Props>`
  background-color: ${({ bgc }) => bgc || ""};
  border-radius: ${({ radius }) => radius || ""};
  padding: ${({ padding }) => padding || ""};
  margin: ${({ margin }) => margin || ""};
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
`;

function Button(props: Props): ReactElement {
  return (
    <StyledButton {...props} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
