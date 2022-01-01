import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children?: any;
  width?: string | number;
  height?: string | number;
  direction?: string;
  justify?: string;
  align?: string;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
  gap?: string | number;
  rowGap?: string | number;
  background?: string;
  border?: string;
  padding?: string;
  radius?: string;
  cursor?: string;
  usn?: boolean;
  wrap?: string;
  position?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  flex?: string;
  overflow?: string;
  onClick?: () => void;
}

const StyledFlex = styled.div<Props>`
  display: flex;
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "start"};
  align-items: ${({ align }) => align || "flex-start"};
  margin-left: ${({ ml }) => (ml && ml + "px") || ""};
  margin-top: ${({ mt }) => (mt && mt + "px") || ""};
  margin-right: ${({ mr }) => (mr && mr + "px") || ""};
  margin-bottom: ${({ mb }) => (mb && mb + "px") || ""};
  gap: ${({ gap }) => (gap && gap + "px") || ""};
  row-gap: ${({ rowGap }) => (rowGap && rowGap + "px") || ""};
  background: ${({ background }) => background || ""};
  border: ${({ border }) => border || ""};
  padding: ${({ padding }) => padding || ""};
  border-radius: ${({ radius }) => radius || ""};
  cursor: ${({ cursor }) => cursor || ""};
  flex-wrap: ${({ wrap }) => wrap || ""};
  user-select: ${({ usn }) => usn && "none"};
  position: ${({ position }) => position || "static"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  top: ${({ top }) => top || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  flex: ${({ flex }) => flex || ""};
  overflow: ${({ overflow }) => overflow || ""};
`;

function Flex(props: Props): ReactElement {
  return (
    <StyledFlex {...props} onClick={props.onClick}>
      {props.children}
    </StyledFlex>
  );
}

export default Flex;
