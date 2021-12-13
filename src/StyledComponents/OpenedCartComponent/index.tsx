import styled from "styled-components";

export const StyledOpenedCart = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  z-index: 1000;
`;

export const StyledBackgroundOpenedCart = styled.div`
  background-color: #000;
  opacity: 0.8;
  flex: 1;
`;

export const StyledCartBlock = styled.div`
  background-color: #fff;
  width: 400px;
  height: 100%;
`;
