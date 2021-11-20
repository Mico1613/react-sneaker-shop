import React, { ReactElement } from "react";
import EmptyPage from "../../Components/EmptyPage";
import Container from "../../StyledComponents/Container";
import Flex from "../../StyledComponents/Flex";
import SvgBack from "../../StyledComponents/SvgIcons/SvgBack";
import Text from "../../StyledComponents/Text";
import pic from "../../assets/smile_1.png";

interface Props {}

function PurchasesPage({}: Props): ReactElement {
  return (
    <>
      {false ? (
        <Container>
          <Flex align="center">
            <button>
              <SvgBack />
            </button>
            <Text
              marginLeft={21}
              fontSize="32px"
              fontWeight="bold"
              lineHeight="39px"
            >
              Мои покупки
            </Text>
          </Flex>
          <Flex></Flex>
        </Container>
      ) : (
        <EmptyPage
          suptext="У вас нет заказов"
          subtext="Пожалуйста, оформите заказ"
          imgUrl={pic}
        />
      )}
    </>
  );
}

export default PurchasesPage;
