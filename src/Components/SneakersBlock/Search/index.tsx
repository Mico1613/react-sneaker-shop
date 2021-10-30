import React, { ReactElement } from "react";
import Flex from "../../../StyledComponents/Flex";
import InputSearch from "../../../StyledComponents/InputSearch";
import SvgSearch from "../../../StyledComponents/SvgIcons/SvgSearch";

interface Props {}

function Search({}: Props): ReactElement {
  const ref = React.useRef<HTMLInputElement>(null);

  return (
    <Flex
      border="1px solid #F3F3F3"
      radius="10px"
      padding="15px"
      cursor="text"
      onClick={() => (ref.current as HTMLInputElement).focus()}
    >
      <SvgSearch />
      <InputSearch ref={ref} />
    </Flex>
  );
}

export default Search;
