import React, { ReactElement } from "react";
import { onCloseCart } from "../../redux/actions/cartActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Flex from "../../StyledComponents/Flex";
import {
  StyledBackgroundOpenedCart,
  StyledCartBlock,
  StyledOpenedCart,
} from "../../StyledComponents/OpenedCartComponent";
import { ISneaker } from "../../types";
import SneakerInCart from "../SneakersBlock/SneakerInCart";

interface Props {}

function OpenedCart({}: Props): ReactElement {
  const refPopup = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const popupHideClick = (e: MouseEvent | TouchEvent) => {
    const path = e.composedPath();
    if (!path.includes(refPopup.current as EventTarget)) {
      dispatch(onCloseCart);
    }
  };
  const { cartItems } = useAppSelector((state) => state.cartReducer);
  React.useEffect(() => {
    document.addEventListener("click", popupHideClick);
    return () => {
      document.removeEventListener("click", popupHideClick);
    };
  }, []);

  return (
    <StyledOpenedCart>
      <StyledBackgroundOpenedCart />
      <div ref={refPopup}>
        <StyledCartBlock>
          <Flex direction="column">
            {cartItems.map((sneakerItem: ISneaker) => {
              return <SneakerInCart key={sneakerItem.id} sneakerItem={sneakerItem} />;
            })}
          </Flex>
        </StyledCartBlock>
      </div>
    </StyledOpenedCart>
  );
}

export default OpenedCart;
