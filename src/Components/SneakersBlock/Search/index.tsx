import React, { ReactElement } from "react";
import Flex from "../../../StyledComponents/Flex";
import InputSearch from "../../../StyledComponents/InputSearch";
import SvgSearch from "../../../StyledComponents/SvgIcons/SvgSearch";

interface Props {
  handleInput: (text: string) => void;
}

const Search = React.memo(({ handleInput }: Props): ReactElement => {
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    handleInput(inputValue);
  }, [inputValue]);

  const [inputTrigger, setInputTrigger] = React.useState(0);
  return (
    <Flex
      border="1px solid #F3F3F3"
      radius="10px"
      padding="15px"
      cursor="text"
      onClick={() => setInputTrigger((inputTrigger) => inputTrigger + 1)}
    >
      <SvgSearch />
      <InputSearch
        inputTrigger={inputTrigger}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
    </Flex>
  );
});

export default Search;
