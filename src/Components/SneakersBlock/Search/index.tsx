import React, { ReactElement } from "react";
import Flex from "../../../StyledComponents/Flex";
import InputSearch from "../../../StyledComponents/InputSearch";
import SvgSearch from "../../../StyledComponents/SvgIcons/SvgSearch";

interface Props {
  handleInput: (text: string) => void;
}

function Search({ handleInput }: Props): ReactElement {
  const ref = React.useRef<HTMLInputElement>(null);

  const [state, setstate] = React.useState("");

  React.useEffect(() => {
    handleInput(state);
  }, [state]);

  return (
    <Flex
      border="1px solid #F3F3F3"
      radius="10px"
      padding="15px"
      cursor="text"
      onClick={() => (ref.current as HTMLInputElement).focus()}
    >
      <SvgSearch />
      <InputSearch
        ref={ref}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setstate(e.target.value)
        }
      />
    </Flex>
  );
}

export default Search;
