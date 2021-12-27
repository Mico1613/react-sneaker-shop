import React, { ReactElement } from "react";
import EmptyPage from "../../Components/EmptyPage";
import { useAppSelector } from "../../redux/hooks";
import Container from "../../StyledComponents/Container";
import Flex from "../../StyledComponents/Flex";
import SvgBack from "../../StyledComponents/SvgIcons/SvgBack";
import Text from "../../StyledComponents/Text";
import pic from "../../assets/smile_2.png";
import { Link } from "react-router-dom";
import Sneaker from "../../Components/SneakersBlock/Sneaker";

interface Props {}

function FavouritesPage({}: Props): ReactElement {
  const { favouritesItems } = useAppSelector(
    (state) => state.favouritesReducer
  );
  console.log(favouritesItems);

  return (
    <>
      {true ? (
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
              Мои закладки
            </Text>
          </Flex>
          <Flex wrap="wrap" justify="space-between" rowGap="40">
            {favouritesItems.map((sneakerItem) => {
              return <Sneaker key={sneakerItem.id} sneakerItem={sneakerItem} />;
            })}
          </Flex>
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
