import React, { ReactElement } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../redux/hooks";
import Button from "../../../StyledComponents/Button";
import Flex from "../../../StyledComponents/Flex";
import Text from "../../../StyledComponents/Text";
import arrow from "../../../assets/arrow.png";

interface Props {}
const StyledDashedBlock = styled.div`
  flex: 1;
  border-bottom: 1px dashed #dfdfdf;
`;
const StyledArrow = styled.img.attrs({
  src: arrow,
  alt: "#",
})`
  transform: rotate(180deg) translateX(-65px);
`;
function CartFooter({}: Props): ReactElement {
  const { generalSum } = useAppSelector((state) => state.cartReducer);
  return (
    <Flex direction="column">
      <Flex width="100%" align="flex-bottom" mb="20">
        <Text>Итого:</Text>
        <StyledDashedBlock />
        <Text fontWeight="bold">{generalSum} руб.</Text>
      </Flex>
      <Flex width="100%" align="flex-bottom" mb="25">
        <Text>Налог 5%:</Text>
        <StyledDashedBlock />
        <Text fontWeight="bold">{(generalSum / 100) * 5} руб.</Text>
      </Flex>
      <Button padding="18px 0" bgc="#9DD458" width="100%" radius="18px">
        <Flex justify="center" align="center">
          <Text color="#fff">Оформить заказ</Text>
          <StyledArrow />
        </Flex>
      </Button>
    </Flex>
  );
}

export default CartFooter;
