import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children?: React.ReactNode;
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
  usn?: boolean;
  opacity?: number;
  tac?: boolean;
}

const StyledText = styled.p<Props>`
  text-transform: ${({ transform }) => transform || "none"};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  color: ${({ color }) => color || "#000"};
  line-height: ${({ lineHeight }) =>
    (lineHeight && lineHeight + "px") || "1rem"};
  margin-left: ${({ marginLeft }) => (marginLeft && marginLeft + "px") || ""};
  margin-top: ${({ marginTop }) => (marginTop && marginTop + "px") || ""};
  margin-right: ${({ marginRight }) =>
    (marginRight && marginRight + "px") || ""};
  margin-bottom: ${({ marginBottom }) =>
    (marginBottom && marginBottom + "px") || ""};
  user-select: ${({ usn }) => usn && "none"};
  opacity: ${({ opacity }) => opacity || 1};
  text-align: ${({ tac }) => tac && "center"};
`;

function Text(props: Props): ReactElement {
  return <StyledText {...props}>{props.children}</StyledText>;
}

export default Text;
