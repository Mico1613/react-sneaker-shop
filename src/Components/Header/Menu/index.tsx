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


function Menu(): ReactElement {

  const dispatch = useAppDispatch();
  
  const onOpenCartClick = () => {
    dispatch(onOpenCart);
  };

  const { generalSum } = useAppSelector((state) => state.cartReducer);

  return (
    <Flex justify="space-between" gap="30">
      <Button onClick={onOpenCartClick}>
        <Flex align="center" gap={10}>
          <SvgCart />
          <Text color="#5C5C5C" fontWeight="600">
            {generalSum} руб.
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
