import React, { ReactElement } from "react";
import Flex from "../../StyledComponents/Flex";
import logo from "../../assets/stories_logo.png";
import picture from "../../assets/stories_picture.png";
import Text from "../../StyledComponents/Text";
import styled from "styled-components";
import Button from "../../StyledComponents/Button";

interface Props {}
const StyledFlex = styled(Flex)`
  width: 100%;
  height: 300px;
`;
const StyledTextBlockWrapper = styled(Flex)`
  padding: 15px 15px 50px 60px;
  background: #f4efe9;
  border-radius: 20px 0px 0px 20px;
  height: 100%;
`;

const StyledBackgroundImg = styled.div`
  flex: 1;
  height: 100%;
  background-image: url(${picture});
  background-color: #f1ece6;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0px 20px 20px 0px;
`;
const FirstLineText = styled(Text)`
  &::after {
    content: ",";
    color: black;
  }
`;

const StyledButton = styled(Button)`
  text-align: center;
  width: 180px;
`;
function StoriesBlock({}: Props): ReactElement {
  return (
    <StyledFlex usn>
      <StyledTextBlockWrapper direction="column" align="start">
        <Flex marginLeft={-40} marginBottom={35}>
          <div>
            <img src={logo} alt="#logo" />
          </div>
        </Flex>
        <FirstLineText
          color="#8BB43C"
          fontWeight="bold"
          fontSize="38px"
          lineHeight={46}
        >
          Stan Smith
        </FirstLineText>
        <Text
          color="#000"
          fontWeight="bold"
          fontSize="38px"
          lineHeight={46}
          marginBottom={15}
        >
          Forever!
        </Text>
        <StyledButton padding="1em 0" bgc="#A5D364" radius="110px">
          <Text as="span" color="#fff">
            Купить
          </Text>
        </StyledButton>
      </StyledTextBlockWrapper>
      <StyledBackgroundImg />
    </StyledFlex>
  );
}

export default StoriesBlock;
