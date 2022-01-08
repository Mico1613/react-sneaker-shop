import React, { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  ref?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

const InputSearch = React.forwardRef(
  ({ onChange }: Props, ref: any): ReactElement => {
    return (
      <>
        <StyledInput ref={ref} onChange={onChange} />
      </>
    );
  }
);

export default InputSearch;
