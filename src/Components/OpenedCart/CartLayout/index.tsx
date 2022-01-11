import React, { ReactElement } from "react";
import Flex from "../../../StyledComponents/Flex";

import Text from "../../../StyledComponents/Text";
import Button from "../../../StyledComponents/Button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { onCloseCart } from "../../../redux/actions/cartActions";
import arrow from "../../../assets/arrow.png";
import styled from "styled-components";
interface Props {
  suptext: string;
  subtext: string;
  imgUrl: string;
  green?: boolean;
}
const StyledArrow = styled.img.attrs({
  src: arrow,
  alt: "#",
})`
  width: 16px;
  height: 14px;
  margin-left: 40px;
  margin-right: 25px;
`;
function CartLayout({ suptext, subtext, imgUrl, green }: Props): ReactElement {

  const dispatch = useAppDispatch();

  const closeCart = () => {
    dispatch(onCloseCart);
  };
  
  return (
    <Flex direction="column" align="center" justify="center" mt="-100">
      <img src={imgUrl} alt="#" width="120px" height="120px" />
      <Text
        marginTop="21"
        marginBottom="15"
        fontWeight="600"
        fontSize="22px"
        color={green ? "#87C20A" : "#000"}
      >
        {suptext}
      </Text>
      <Text marginBottom="40" opacity={0.4} fontSize="16px" lineHeight="24" tac>
        {subtext}
      </Text>
      <Button
        bgc="#9DD458"
        padding="20px 0"
        radius="18px"
        onClick={closeCart}
        width="280px"
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

export default CartLayout;
