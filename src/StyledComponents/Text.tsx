import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
  as?: any;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  lineHeight?: string | number;
  transform?: string;
}

const StyledText = styled.p<Props>`
  text-transform: ${({ transform }) => transform || "none"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  color: ${({ color }) => color || "#000"};
  line-height: ${({ lineHeight }) => lineHeight + "px" || "0"};
  margin-left: ${({ marginLeft }) => marginLeft + "px" || "0"};
  margin-top: ${({ marginTop }) => marginTop + "px" || "0"};
  margin-right: ${({ marginRight }) => marginRight + "px" || "0"};
  margin-bottom: ${({ marginBottom }) => marginBottom + "px" || "0"};
`;

function Text(props: Props): ReactElement {
  return <StyledText {...props}>{props.children}</StyledText>;
}

export default Text;
