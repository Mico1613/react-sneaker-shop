import React, { ReactElement } from "react";
import styled from "styled-components";
import { removeFromCart } from "../../../redux/actions/cartActions";
import { toggleAddedState } from "../../../redux/actions/goodsAction";
import { useAppDispatch } from "../../../redux/hooks";
import Flex from "../../../StyledComponents/Flex";
import SvgRemoveSneakerFromCart from "../../../StyledComponents/SvgIcons/SvgRemoveSneakerFromCart";
import Text from "../../../StyledComponents/Text";
import { ISneaker } from "../../../types";

interface Props {
  sneakerItem: ISneaker;
}

const StyledFlexWithHover = styled(Flex)`
  cursor: pointer;
  &:hover {
    background: #f3f3f3;
    svg {
      fill: #787878;
    }
  }
`;

function SneakerInCart({ sneakerItem }: Props): ReactElement {
  const { title, price, imageUrl } = sneakerItem;

  const dispatch = useAppDispatch();
  
  const onRemoveFromCart = (item: ISneaker) => {
    dispatch(toggleAddedState(item));
    dispatch(removeFromCart(item));
  };

  return (
    <Flex
      align="center"
      border="1px solid #F3F3F3"
      radius="20px"
      padding="30px 20px"
      usn
    >
      <img src={imageUrl} alt="#" width="70px" height="60px" />

      <Flex direction="column" ml="21" mr="15">
        <Text marginBottom="8">{title}</Text>
        <Text fontWeight="bold">{price} руб.</Text>
      </Flex>

      <StyledFlexWithHover
        border="1px solid #F2F2F2"
        padding="9px"
        radius="7px"
        onClick={() => onRemoveFromCart(sneakerItem)}
      >
        <SvgRemoveSneakerFromCart />
      </StyledFlexWithHover>
    </Flex>
  );
}

export default SneakerInCart;
