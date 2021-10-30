import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  ref?: any;
}

const StyledInput = styled.input.attrs({
  type: "text",
  placeholder: "Поиск...",
})`
  margin-left: 13.75px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &::placeholder {
    color: #c4c4c4;
  }
`;

const InputSearch = React.forwardRef(({}: Props, ref: any): ReactElement => {
  return (
    <>
      <StyledInput ref={ref} />
    </>
  );
});

export default InputSearch;
