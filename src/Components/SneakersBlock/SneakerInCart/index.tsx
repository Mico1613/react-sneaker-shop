import React, { ReactElement } from "react";
import styled from "styled-components";
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
  const { title, price, imageUrl, id } = sneakerItem;
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
        <Text>{title}</Text>
        <Text>{price}</Text>
      </Flex>

      <StyledFlexWithHover
        border="1px solid #F2F2F2"
        padding="9px"
        radius="7px"
      >
        <SvgRemoveSneakerFromCart />
      </StyledFlexWithHover>
    </Flex>
  );
}

export default SneakerInCart;
