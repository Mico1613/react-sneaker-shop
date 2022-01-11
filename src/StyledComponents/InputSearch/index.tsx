import React, { ReactElement, Ref } from "react";
import styled from "styled-components";

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputTrigger: number;
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
const InputSearch = ({ onChange, inputTrigger }: Props): ReactElement => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    if (inputTrigger && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputTrigger]);

  return <StyledInput ref={inputRef} onChange={onChange} />;
};
export default InputSearch;
