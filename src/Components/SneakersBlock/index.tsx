import React, { ReactElement } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import Flex from "../../StyledComponents/Flex";
import Text from "../../StyledComponents/Text";
import { ISneaker } from "../../types";
import CustomContentLoader from "../CustomContentLoader";
import Search from "./Search";
import Sneaker from "./Sneaker";

const StyledSneakersBlockWrapper = styled.div`
  min-height: 800px;
`;

const SneakersBlock = (): ReactElement => {
  const { isLoading, goods } = useAppSelector((state) => state.goodsReducer);

  const [filteredValue, setFilteredValue] = React.useState<ISneaker[]>([]);

  React.useEffect(() => {
    if (!isLoading) {
      setFilteredValue(goods);
    }
  }, [isLoading]);

  const handleInput = (text: string) => {
    let data = [...goods];
    data = goods.filter((i) =>
      i.title.toLocaleLowerCase().includes(text.toLocaleLowerCase().trim())
    );
    setFilteredValue(data);
  };

  return (
    <StyledSneakersBlockWrapper>
      <Flex justify="space-between" align="center" mb="40">
        <Text fontWeight="bold" fontSize="32px" lineHeight="39px">
          Все кроссовки
        </Text>
        <Search handleInput={handleInput} />
      </Flex>

      <Flex wrap="wrap" gap="40">
        {isLoading
          ? Array(12)
              .fill(1)
              .map((item, index) => {
                return <CustomContentLoader key={index} />;
              })
          : filteredValue.map((sneakerItem: ISneaker) => (
              <Sneaker key={sneakerItem.id} sneakerItem={sneakerItem} />
            ))}
      </Flex>
    </StyledSneakersBlockWrapper>
  );
};

export default SneakersBlock;
