import React, { useContext } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../restaurant-info-card-component";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Card } from "react-native-paper";
import { Spacer } from "../spacer/spacer.component";
import { RestaurantsContext } from "../../../../services/restaurants/restaurants.context";
import { SafeArea } from "../../../../components/utils/safe-area.component";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight};
`;

const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
  keyExtractor: (item) => item.name,
  showsVerticalScrollIndicator: true,
})``;

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  return (
    <StyledSafeArea>
      <SearchView>
        <Searchbar />
      </SearchView>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
      />
    </StyledSafeArea>
  );
};
