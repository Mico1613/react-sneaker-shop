import React, { ReactElement } from "react";
import { useAppSelector } from "../../redux/hooks";
import Flex from "../../StyledComponents/Flex";
import Text from "../../StyledComponents/Text";
import { ISneaker } from "../../types";
import CustomContentLoader from "../CustomContentLoader";
import Search from "./Search";
import Sneaker from "./Sneaker";

interface Props {}

function SneakersBlock({}: Props): ReactElement {
  const { goods, isLoading } = useAppSelector((state) => state.goodsReducer);
  return (
    <>
      <Flex justify="space-between" align="center" mb="40">
        <Text fontWeight="bold" fontSize="32px" lineHeight="39px">
          Все кроссовки
        </Text>
        <Search />
      </Flex>
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
    </>
  );
}

export default SneakersBlock;
