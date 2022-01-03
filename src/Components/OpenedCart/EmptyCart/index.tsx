import React, { ReactElement } from "react";
import Flex from "../../../StyledComponents/Flex";
import emptyCart from "../../../assets/empty-cart.png";
import Text from "../../../StyledComponents/Text";
import Button from "../../../StyledComponents/Button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { onCloseCart } from "../../../redux/actions/cartActions";
import arrow from "../../../assets/arrow.png";
import styled from "styled-components";
interface Props {}
const StyledArrow = styled.img.attrs({
  src: arrow,
  alt: "#",
})`
  width: 16px;
  height: 14px;
  margin-left: 30px;
  margin-right: 20px;
`;
function EmptyCart({}: Props): ReactElement {
  const dispatch = useAppDispatch();
  const closeCart = () => {
    dispatch(onCloseCart);
  };
  return (
    <Flex direction="column" align="center" justify="center" mt="-100">
      <img src={emptyCart} alt="#" width="120px" height="120px" />
      <Text marginTop="21" marginBottom="15" fontWeight="600" fontSize="22px">
        Корзина пустая
      </Text>
      <Text marginBottom="40" opacity={0.4} fontSize="16px" lineHeight="24" tac>
        Добавьте хотя бы одну пару
        <br /> кроссовок, чтобы сделать заказ.
      </Text>
      <Button
        bgc="#9DD458"
        padding="20px 0"
        width="100%"
        radius="18px"
        onClick={closeCart}
      >
        <Flex align="center">
          <StyledArrow />
          <Text color="#fff" fontSize="16px" fontWeight="500" lineHeight="19">
            Вернуться назад
          </Text>
        </Flex>
      </Button>
    </Flex>
  );
}

export default EmptyCart;
