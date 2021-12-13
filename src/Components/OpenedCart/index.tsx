import React, { ReactElement } from "react";
import {
  StyledBackgroundOpenedCart,
  StyledCartBlock,
  StyledOpenedCart,
} from "../../StyledComponents/OpenedCartComponent";

interface Props {}

function OpenedCart({}: Props): ReactElement {
  return (
    <StyledOpenedCart>
      <StyledBackgroundOpenedCart />
      <StyledCartBlock>234</StyledCartBlock>
    </StyledOpenedCart>
  );
}

export default OpenedCart;
