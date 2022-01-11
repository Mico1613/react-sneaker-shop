import React, { ReactElement } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import Button from "../../../StyledComponents/Button";
import Flex from "../../../StyledComponents/Flex";
import Text from "../../../StyledComponents/Text";
import arrow from "../../../assets/arrow.png";
import { addToPurchases } from "../../../redux/actions/purchasesActions";
import { onResetCart } from "../../../redux/actions/cartActions";
import { onResetAddedState } from "../../../redux/actions/goodsAction";

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

function CartFooter(): ReactElement {
  const { generalSum, cartItems } = useAppSelector(
    (state) => state.cartReducer
  );

  const dispatch = useAppDispatch();
  
  const addSneakersToPurchasesList = () => {
    dispatch(addToPurchases(cartItems));
    dispatch(onResetCart);
    dispatch(onResetAddedState);
  };

  return (
    <Flex direction="column">
      <Flex width="100%" align="flex-bottom" mb="20">
        <Text marginRight="5">Итого:</Text>
        <StyledDashedBlock />
        <Text fontWeight="bold" marginLeft="5">
          {generalSum} руб.
        </Text>
      </Flex>
      <Flex width="100%" align="flex-bottom" mb="25">
        <Text marginRight="5">Налог 5%:</Text>
        <StyledDashedBlock />
        <Text fontWeight="bold" marginLeft="5">
          {((generalSum / 100) * 5).toFixed(2)} руб.
        </Text>
      </Flex>
      <Button
        padding="18px 0"
        bgc="#9DD458"
        width="100%"
        radius="18px"
        onClick={addSneakersToPurchasesList}
      >
        <Flex justify="center" align="center">
          <Text color="#fff">Оформить заказ</Text>
          <StyledArrow />
        </Flex>
      </Button>
    </Flex>
  );
}

export default CartFooter;
