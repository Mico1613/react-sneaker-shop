import React, { ReactElement } from "react";
import Flex from "../../StyledComponents/Flex";
import Text from "../../StyledComponents/Text";
import arrow from "../../assets/arrow.png";
import Button from "../../StyledComponents/Button";
import { Link } from "react-router-dom";

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
      <Flex direction="column" align="center">
        <img src={imgUrl} alt="#" />
        <Text
          fontSize="24px"
          fontWeight="600"
          lineHeight="29"
          marginTop="20"
          marginBottom="10"
        >
          {suptext}
        </Text>
        <Text
          fontSize="16px"
          lineHeight="24"
          fontWeight="400"
          marginBottom="50"
          opacity={0.4}
        >
          {subtext}
        </Text>
        <Link to="/">
          <Button bgc="#9DD458" radius="18px" padding="20px 35px">
            <Flex justify="center" align="center">
              <img src={arrow} alt="#" />
              <Text
                fontSize="16px"
                fontWeight="500"
                lineHeight="20"
                color="white"
                marginLeft="15"
              >
                Вернуться назад
              </Text>
            </Flex>
          </Button>{" "}
        </Link>
      </Flex>
    </Flex>
  );
}

export default EmptyPage;
