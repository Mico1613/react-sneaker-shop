import React, { ReactElement } from "react";
import Container from "../../StyledComponents/Container";
import Flex from "../../StyledComponents/Flex";
import Main from "../../StyledComponents/Main";
import SvgBack from "../../StyledComponents/SvgIcons/SvgBack";
import Text from "../../StyledComponents/Text";

interface Props {}

function PurchasesPage({}: Props): ReactElement {
  return (
    <Container>
      <Flex align="center">
        <button>
          <SvgBack />
        </button>
        <Text
          marginLeft={21}
          fontSize="32px"
          fontWeight="bold"
          lineHeight="39px"
        >
          Мои покупки
        </Text>
      </Flex>
      <Flex></Flex>
    </Container>
  );
}

export default PurchasesPage;
