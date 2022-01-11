import styled from "styled-components";
import { StyledMain } from "../../StyledComponents/Main";

export const StyledError = styled(StyledMain)`
  font-size: 48px;
  font-weight: bold;
  height: calc(100vh - 302px);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  user-select: none;
`;