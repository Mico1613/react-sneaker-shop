import React, { ReactElement } from "react";
import EmptyPage from "../../Components/EmptyPage";
import { useAppSelector } from "../../redux/hooks";
import Container from "../../StyledComponents/Container";
import Flex from "../../StyledComponents/Flex";
import SvgBack from "../../StyledComponents/SvgIcons/SvgBack";
import Text from "../../StyledComponents/Text";
import pic from "../../assets/smile_2.png";
import { Link } from "react-router-dom";

interface Props {}

function FavouritesPage({}: Props): ReactElement {
  const data = useAppSelector((state) => state.favouritesReducer);
  console.log(data);

  return (
    <>
      {true ? (
        <Container>
          <Flex align="center">
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
              Мои закладки
            </Text>
          </Flex>
          <Flex></Flex>
        </Container>
      ) : (
        <EmptyPage
          suptext="Закладок нет:("
          subtext="Вы ничего не добавляли в закладки"
          imgUrl={pic}
        />
      )}
    </>
  );
}

export default FavouritesPage;
