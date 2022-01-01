import React, { ReactElement } from "react";
import styled from "styled-components";
import Button from "../../../StyledComponents/Button";
import Flex from "../../../StyledComponents/Flex";
import Text from "../../../StyledComponents/Text";

interface Props {}
const StyledDashedBlock = styled.div`
  flex: 1;
  border-bottom: 1px dashed #dfdfdf;
`;
function CartFooter({}: Props): ReactElement {
  return (
    <Flex direction="column">
      <Flex width="100%" align="flex-bottom" mb="20">
        <Text>Итого:</Text>
        <StyledDashedBlock />
        <Text fontWeight="bold">{123} руб.</Text>
      </Flex>
      <Flex width="100%" align="flex-bottom" mb="25">
        <Text>Налог 5%:</Text>
        <StyledDashedBlock />
        <Text fontWeight="bold">{123} руб.</Text>
      </Flex>
      <Button padding="18px 0" bgc="#9DD458" width="100%" radius="18px">
        <Flex justify="center">
          <Text color="#fff">Оформить заказ</Text>
        </Flex>
      </Button>
    </Flex>
  );
}

export default CartFooter;
