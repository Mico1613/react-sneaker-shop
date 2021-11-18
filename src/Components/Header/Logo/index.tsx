import React, { ReactElement } from "react";
import Flex from "../../../StyledComponents/Flex";
import Text from "../../../StyledComponents/Text";
import LogoImage from "../../../assets/logo.png";
interface Props {}

function Logo({}: Props): ReactElement {
  return (
    <Flex align="center" justify="space-between" usn>
      <img src={LogoImage} width="40px" height="40px" alt="#logo" />
      <Flex direction="column" ml={15}>
        <Text
          as="h1"
          fontSize="20px"
          fontWeight="700"
          lineHeight={24}
          transform="uppercase"
        >
          React Sneakers
        </Text>
        <Text as="p" color="#9D9D9D">
          Магазин кековых кроссовок
        </Text>
      </Flex>
    </Flex>
  );
}

export default Logo;
