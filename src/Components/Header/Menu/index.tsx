import React, { ReactElement } from "react";
import Flex from "../../../StyledComponents/Flex";
import SvgCart from "../../../StyledComponents/SvgIcons/SvgCart";
import SvgFavourites from "../../../StyledComponents/SvgIcons/SvgFavourites";
import SvgPurchases from "../../../StyledComponents/SvgIcons/SvgPurchases";
import Text from "../../../StyledComponents/Text";
import { Link } from "react-router-dom";
import Button from "../../../StyledComponents/Button";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { onOpenCart } from "../../../redux/actions/cartActions";

interface Props {}

function Menu(props: Props): ReactElement {
  const state = useAppSelector((state) => state.cartReducer);
  console.log(state);
  const dispatch = useAppDispatch();
  const onOpenCartClick = () => {
    dispatch(onOpenCart);
  };
  return (
    <Flex justify="space-between" gap="30">
      <Button onClick={onOpenCartClick}>
        <Flex align="center" gap={10}>
          <SvgCart />
          <Text color="#5C5C5C" fontWeight="600">
            {1205} руб.
          </Text>
        </Flex>
      </Button>
      <Link to="favourites">
        <SvgFavourites />
      </Link>
      <Link to="purchases">
        <SvgPurchases />
      </Link>
    </Flex>
  );
}

export default Menu;
