import styled from "styled-components";
import Flex from "../Flex";
import picture from "../../assets/stories_picture.png";
import Text from "../Text";

export const StoriesStyledFlex = styled(Flex)`
  width: 100%;
  height: 300px;
  user-select: none;
  margin-bottom: 40px;
`;
export const StoriesStyledTextBlockWrapper = styled(Flex)`
  padding: 15px 15px 50px 60px;
  background: #f4efe9;
  border-radius: 20px 0px 0px 20px;
  height: 100%;
  flex-direction: column;
  align-items: start;
`;

export const StoriesStyledBackgroundImg = styled.div`
  flex: 1;
  height: 100%;
  background-image: url(${picture});
  background-color: #f1ece6;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0px 20px 20px 0px;
`;
export const StoriesFirstLineText = styled(Text)`
  color: #8BB43C;
  font-weight: bold;
  font-size: 38px;
  line-height: 46px;
  &::after {
    content: ",";
    color: black;
  }
`;
export const StoriesSecondLineText = styled(Text)`
  color: #000;
  font-weight: bold;
  font-size: 38px;
  line-height: 46px;
  margin-bottom: 15px;
`;
export const StoriesStyledA = styled.a.attrs({
  href: "https://sneakerstudio.ru/product-rus-1021688-%D0%9A%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-adidas-Originals-x-Disney-Stan-Smith-Kermit-FX5550-264.html?gclid=Cj0KCQjw8eOLBhC1ARIsAOzx5cG8iue_B-ecywuzNcZEA3DAymDiKXpyeu3PmNsp-L5WcgmmV-yYcxgaAs2xEALw_wcB",
  target: "_blank",
})`
  display: block;
  line-height: 3rem;
  border-radius: 110px;
  background-color: #a5d364;
  text-align: center;
  width: 180px;
  transition: background-color 0.2s linear;
  &:hover {
    background-color: #80b339;
  }
  &:active {
    background-color: #658f2a;
    transition: all 0s;
  }
`;
