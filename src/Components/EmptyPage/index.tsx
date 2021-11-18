import React, { ReactElement } from "react";
import Flex from "../../StyledComponents/Flex";
import Text from "../../StyledComponents/Text";
import arrow from "../../assets/arrow.png";

interface Props {
  subtext: string;
  suptext: string;
  imgUrl: string;
}

function EmptyPage({ subtext, suptext, imgUrl }: Props): ReactElement {
  return (
    <Flex
      width="100%"
      height="max(500px, calc(100vh - 302px))"
      align="center"
      justify="center"
    >
      <Flex direction="column">
        <img src={imgUrl} alt="#" />
        <Text fontSize="24px" fontWeight="600" lineHeight="29px">
          {suptext}
        </Text>
        <Text fontSize="16px" lineHeight="24px" fontWeight="400">
          {subtext}
        </Text>
        <button>
          <Flex>
            <img src={arrow} alt="#" />
            <Text
              fontSize="16px"
              fontWeight="600"
              lineHeight="20px"
              color="white"
            >
              Вернуться назад
            </Text>
          </Flex>
        </button>
      </Flex>
    </Flex>
  );
}

export default EmptyPage;
