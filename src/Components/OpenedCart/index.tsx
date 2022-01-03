import React, { ReactElement } from "react";
import { onCloseCart } from "../../redux/actions/cartActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Flex from "../../StyledComponents/Flex";
import {
  StyledBackgroundOpenedCart,
  StyledCartBlock,
  StyledOpenedCart,
} from "../../StyledComponents/OpenedCartComponent";
import Text from "../../StyledComponents/Text";
import { ISneaker } from "../../types";
import CartFooter from "./CartFooter";
import EmptyCart from "./EmptyCart";
import SneakerInCart from "./SneakerInCart";

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
          <Text
            fontWeight="700"
            fontSize="24px"
            lineHeight="29px"
            marginBottom="30"
          >
            Корзина
          </Text>
          {false ? (
            <Flex align="center" justify="center" height="100%">
              <EmptyCart />
            </Flex>
          ) : (
            <>
              <Flex
                direction="column"
                gap="20"
                flex="1"
                height="70%"
                overflow="auto"
                mb="60"
              >
                {cartItems.map((sneakerItem: ISneaker) => {
                  return (
                    <SneakerInCart
                      key={sneakerItem.id}
                      sneakerItem={sneakerItem}
                    />
                  );
                })}
              </Flex>
              <CartFooter />
            </>
          )}
        </StyledCartBlock>
      </div>
    </StyledOpenedCart>
  );
}

export default OpenedCart;
