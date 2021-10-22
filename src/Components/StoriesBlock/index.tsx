import React, { ReactElement } from "react";
import Flex from "../../StyledComponents/Flex";
import logo from "../../assets/stories_logo.png";
import picture from "../../assets/stories_picture.png";
import Text from "../../StyledComponents/Text";
import styled from "styled-components";
interface Props {}

const StyledFlex = styled(Flex)`
  background: #f4efe9;
  border-radius: 20px;
`;
const StyledTextBlockWrapper = styled(Flex)`
  padding: 20px 15px 20px 40px;
`;

const StyledBackgroundImg = styled.div`
  background-image: url(${picture});
  width: 642px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
`;

function StoriesBlock({}: Props): ReactElement {
  return (
    <StyledFlex>
      <StyledTextBlockWrapper
        direction="column"
        justify="center"
        align="center"
      >
        <Flex>
          <div>
            <img src={logo} alt="#logo" />
          </div>
        </Flex>
        <Text
          color="#8BB43C"
          fontWeight="bold"
          fontSize="38px"
          lineHeight="46px"
        >
          Stan Smith
        </Text>
      </StyledTextBlockWrapper>
      <StyledBackgroundImg/>
    </StyledFlex>
  );
}

export default StoriesBlock;
