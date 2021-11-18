import React, { ReactElement } from "react";
import Flex from "../../../StyledComponents/Flex";
import Text from "../../../StyledComponents/Text";
import { IGoodsData } from "../../../types";
import likedImg from "../../../assets/liked.png";
import notLikedImg from "../../../assets/not_liked.png";
import addedImg from "../../../assets/added.png";
import notAddedImg from "../../../assets/not_added.png";

interface Props {
  sneakerItem: IGoodsData;
}

function Sneaker({ sneakerItem }: Props): ReactElement {
  const { title, price, imageUrl } = sneakerItem;
  const [liked, setLiked] = React.useState(false);
  const [added, setAdded] = React.useState(false);

  return (
    <Flex
      direction="column"
      border="1px solid #F3F3F3"
      radius="40px"
      padding="20px 29px 35px 30px"
      width="210px"
      position="relative"
    >
      <Flex
        position="absolute"
        top="30px"
        left="30px"
        justify="center"
        align="center"
        cursor="pointer"
        onClick={() => setLiked(!liked)}
      >
        <img src={liked ? likedImg : notLikedImg} alt="#" />
      </Flex>
      <Flex mb={15}>
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
            as="span"
          >
            Цена:
          </Text>
          <Text fontWeight="700" lineHeight={16.94} as="span">
            {price} руб.
          </Text>
        </Flex>
        <Flex>
          <button onClick={() => setAdded(!added)}>
            <img
              style={{ verticalAlign: "bottom" }}
              src={added ? addedImg : notAddedImg}
              alt="#"
            />
          </button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sneaker;
