import React, { ReactElement } from "react";
import Flex from "../../../StyledComponents/Flex";
import Text from "../../../StyledComponents/Text";
import { IGoodsData } from "../../../types";

interface Props {
  sneakerItem: IGoodsData;
}

function Sneaker({ sneakerItem }: Props): ReactElement {
  const { title, price, imageUrl } = sneakerItem;
  return (
    <Flex
      direction="column"
      border="1px solid #F3F3F3"
      radius="40px"
      padding="20px 29px 35px 30px"
      width="210px"
    >
      <Flex marginBottom={15}>
        <img width="130px" height="110px" src={imageUrl} alt="#" />
      </Flex>

      <Text marginBottom={15} lineHeight={16.94}>
        {title}
      </Text>
      <Flex justify="space-between" width="100%" align="center">
        <Flex direction="column" gap={2}>
          <Text
            fontWeight="500"
            color="#BDBDBD"
            fontSize="11px"
            transform="uppercase"
            lineHeight={13.31}
            as='span'
          >
            Цена:
          </Text>
          <Text fontWeight="700" lineHeight={16.94}  as='span'>{price} руб.</Text>
        </Flex>
        <div>
          <button>Кнопка</button>
        </div>
      </Flex>
    </Flex>
  );
}

export default Sneaker;
