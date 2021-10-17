import React, { ReactElement } from "react";
import Flex from "../StyledComponents/Flex";
import SvgCart from "../StyledComponents/SvgIcons/SvgCart";
import SvgFavourites from "../StyledComponents/SvgIcons/SvgFavourites";
import SvgPurchases from "../StyledComponents/SvgIcons/SvgPurchases";

interface Props {}

function Menu(props: Props): ReactElement {
  return (
    <Flex justify="space-between" gap="10">
      <SvgCart />
      <SvgFavourites />
      <SvgPurchases />
    </Flex>
  );
}

export default Menu;
