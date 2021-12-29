import React, { ReactElement } from "react";
import { useAppSelector } from "../../../redux/hooks";
import Flex from "../../../StyledComponents/Flex";
import { ISneaker } from "../../../types";
import CustomContentLoader from "../../ContentLoader";
import Sneaker from "../Sneaker";

interface Props {
  
}

function SneakersItems({}: Props): ReactElement {
  const { goods, isLoading } = useAppSelector((state) => state.goodsReducer);

  return (
    <Flex wrap="wrap" justify="space-between" rowGap="40">
      {isLoading
        ? Array(12)
            .fill(1)
            .map((i, index) => {
              return <CustomContentLoader key={index} />;
            })
        : goods.map((sneakerItem: ISneaker) => (
            <Sneaker key={sneakerItem.id} sneakerItem={sneakerItem} />
          ))}
    </Flex>
  );
}

export default SneakersItems;
