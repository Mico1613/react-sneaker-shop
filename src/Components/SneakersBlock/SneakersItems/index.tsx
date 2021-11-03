import React, { ReactElement } from "react";
import { useAppSelector } from "../../../redux/hooks";
import Flex from "../../../StyledComponents/Flex";
import { IGoodsData } from "../../../types";
import Sneaker from "../Sneaker";

interface Props {}

function SneakersItems({}: Props): ReactElement {
  const { goods } = useAppSelector((state) => state.goodsReducer);
  return (
    <Flex wrap="wrap" justify="space-between" rowGap="40">
      {goods.map((sneakerItem: IGoodsData) => (
        <Sneaker key={sneakerItem.id} sneakerItem={sneakerItem} />
      ))}
    </Flex>
  );
}

export default SneakersItems;
