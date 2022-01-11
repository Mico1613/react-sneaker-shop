import React, { ReactElement } from "react";
import Flex from "../../StyledComponents/Flex";
import logo from "../../assets/stories_logo.png";
import Text from "../../StyledComponents/Text";
import {
  StoriesFirstLineText,
  StoriesSecondLineText,
  StoriesStyledA,
  StoriesStyledBackgroundImg,
  StoriesStyledFlex,
  StoriesStyledTextBlockWrapper,
} from "../../StyledComponents/StoriesComponents";


function StoriesBlock(): ReactElement {
  
  return (
    <StoriesStyledFlex>
      <StoriesStyledTextBlockWrapper>
        <Flex ml={-40} mb={35}>
          <div>
            <img src={logo} alt="#logo" />
          </div>
        </Flex>
        <StoriesFirstLineText>Stan Smith</StoriesFirstLineText>
        <StoriesSecondLineText>Forever!</StoriesSecondLineText>
        <StoriesStyledA>
          <Text as="span" color="#fff" fontWeight="500">
            Купить
          </Text>
        </StoriesStyledA>
      </StoriesStyledTextBlockWrapper>
      <StoriesStyledBackgroundImg />
    </StoriesStyledFlex>
  );
}

export default StoriesBlock;
