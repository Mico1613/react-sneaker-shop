import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
  direction?: string;
  justify?: string;
  align?: string;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  gap?: string | number;
  usn?: boolean;
}

const StyledFlex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "start"};
  align-items: ${({ align }) =>  align || "flex-start"};
  margin-left: ${({ marginLeft }) => (marginLeft && marginLeft + "px") || "0"};
  margin-top: ${({ marginTop }) => (marginTop && marginTop + "px") || "0"};
  margin-right: ${({ marginRight }) => (marginRight && marginRight + "px") || "0"};
  margin-bottom: ${({ marginBottom }) => (marginBottom && marginBottom + "px") || "0"};
  gap: ${({ gap }) => gap && gap + "px" || "0"};
  user-select: ${({ usn }) => usn && "none"};
`;

function Flex(props: Props): ReactElement {
  return <StyledFlex {...props}>{props.children}</StyledFlex>;
}

export default Flex;
