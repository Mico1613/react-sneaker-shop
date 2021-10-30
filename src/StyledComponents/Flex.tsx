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
  background?: string;
  border?: string;
  padding?: string;
  radius?: string;
  cursor?: string;
  onClick?: () => void;
}

const StyledFlex = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "start"};
  align-items: ${({ align }) => align || "flex-start"};
  margin-left: ${({ marginLeft }) => (marginLeft && marginLeft + "px") || ""};
  margin-top: ${({ marginTop }) => (marginTop && marginTop + "px") || ""};
  margin-right: ${({ marginRight }) =>
    (marginRight && marginRight + "px") || ""};
  margin-bottom: ${({ marginBottom }) =>
    (marginBottom && marginBottom + "px") || ""};
  gap: ${({ gap }) => (gap && gap + "px") || ""};
  user-select: ${({ usn }) => usn && "none"};
  background: ${({ background }) => background || ""};
  border: ${({ border }) => border || ""};
  padding: ${({ padding }) => padding || ""};
  border-radius: ${({ radius }) => radius || ""};
  cursor: ${({ cursor }) => cursor || ""};
`;

function Flex(props: Props): ReactElement {
  return (
    <StyledFlex {...props} onClick={props.onClick}>
      {props.children}
    </StyledFlex>
  );
}

export default Flex;
