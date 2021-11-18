import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledSvgBack = styled.svg.attrs({
  width: "35",
  height: "35",
  viewBox: "0 0 35 35",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  cursor: pointer;
  user-select: none;
  stroke: #c8c8c8;
  &:hover {
    stroke-width: 1.25;
    stroke: #B0B0B0;
  }
  &:active {
    stroke-width: 1.25;
    stroke: #949494;
  }
`;

function SvgBack(): ReactElement {
  return (
    <StyledSvgBack>
      <rect x="0.5" y="0.5" width="34" height="34" rx="7.5" fill="white" />
      <path
        d="M19 22L14 17L19 12"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledSvgBack>
  );
}

export default SvgBack;
