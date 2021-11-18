import React, { ReactElement } from "react";
import EmptyPage from "../../Components/EmptyPage";
import { useAppSelector } from "../../redux/hooks";
import Container from "../../StyledComponents/Container";
import Flex from "../../StyledComponents/Flex";
import SvgBack from "../../StyledComponents/SvgIcons/SvgBack";
import Text from "../../StyledComponents/Text";

interface Props {}

function FavouritesPage({}: Props): ReactElement {
  const data = useAppSelector((state) => state.favouritesReducer);
  console.log(data);

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
              Мои закладки
            </Text>
          </Flex>
          <Flex></Flex>
        </Container>
      ) : (
        <EmptyPage
          suptext="Закладок нет:("
          subtext="Вы ничего не добавляли в закладки"
          imgUrl=""
        />
      )}
    </>
  );
}

export default FavouritesPage;
