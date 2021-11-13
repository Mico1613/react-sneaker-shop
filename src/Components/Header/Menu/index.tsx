import React, { ReactElement } from "react";
import Flex from "../../../StyledComponents/Flex";
import SvgCart from "../../../StyledComponents/SvgIcons/SvgCart";
import SvgFavourites from "../../../StyledComponents/SvgIcons/SvgFavourites";
import SvgPurchases from "../../../StyledComponents/SvgIcons/SvgPurchases";
import Text from "../../../StyledComponents/Text";
import { Link } from "react-router-dom";

interface Props {}

function Menu(props: Props): ReactElement {
  return (
    <Flex justify="space-between" gap="30">
      <Flex align="center" gap={10}>
        <SvgCart />
        <Text color="#5C5C5C" fontWeight="600">
          {1205} руб.
        </Text>
      </Flex>
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
