import React, { ReactElement, SyntheticEvent } from "react";
import { onCloseCart } from "../../redux/actions/cartActions";
import { useAppDispatch } from "../../redux/hooks";
import {
  StyledBackgroundOpenedCart,
  StyledCartBlock,
  StyledOpenedCart,
} from "../../StyledComponents/OpenedCartComponent";

interface Props {}

function OpenedCart({}: Props): ReactElement {
  const refPopup = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const popupHideClick = (e: MouseEvent|TouchEvent) => {
    const path = e.composedPath();
    if (!path.includes(refPopup.current as EventTarget)) {
      console.log(e);
      dispatch(onCloseCart);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", popupHideClick);
    return () => {
      window.removeEventListener("click", popupHideClick);
    };
  }, []);

  return (
    <StyledOpenedCart>
      <StyledBackgroundOpenedCart />
      <div ref={refPopup}>
        <StyledCartBlock>234</StyledCartBlock>
      </div>
    </StyledOpenedCart>
  );
}

export default OpenedCart;
