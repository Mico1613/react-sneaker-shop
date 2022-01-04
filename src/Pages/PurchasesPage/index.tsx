import React, { ReactElement } from "react";
import EmptyPage from "../../Components/EmptyPage";
import Container from "../../StyledComponents/Container";
import Flex from "../../StyledComponents/Flex";
import SvgBack from "../../StyledComponents/SvgIcons/SvgBack";
import Text from "../../StyledComponents/Text";
import pic from "../../assets/smile_1.png";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { ISneaker } from "../../types";
import Sneaker from "../../Components/SneakersBlock/Sneaker";

interface Props {}

function PurchasesPage({}: Props): ReactElement {
  const { purchasesData } = useAppSelector((state) => state.purchasesReducer);
  return (
    <>
      {purchasesData.length ? (
        <Container>
          <Flex align="center" mb="40">
            <button>
              <Link to="/">
                <SvgBack />
              </Link>
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
          <Flex wrap="wrap" align="center" gap="40">
            {purchasesData.map((sneakerItem: ISneaker) => {
              return <Sneaker key={sneakerItem.id} sneakerItem={sneakerItem} />;
            })}
          </Flex>
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
