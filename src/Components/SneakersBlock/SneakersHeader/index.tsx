import React, { ReactElement } from "react";
import Flex from "../../../StyledComponents/Flex";
import Text from "../../../StyledComponents/Text";
import Search from "../Search";

function SneakersHeader(): ReactElement {
  return (
    <>
      <Flex justify="space-between" align="center">
        <Text fontWeight="bold" fontSize="32px" lineHeight="39px">
          Все кроссовки
        </Text>
        <Search />
      </Flex>
    </>
  );
}

export default SneakersHeader;
