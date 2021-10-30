import React, { ReactElement } from "react";
import Flex from "../../StyledComponents/Flex";
import SneakersHeader from "./SneakersHeader";
import SneakersItems from "./SneakersItems";

interface Props {}

function SneakersBlock({}: Props): ReactElement {
  return (
    <>
      <SneakersHeader />
      <SneakersItems />
    </>
  );
}

export default SneakersBlock;
