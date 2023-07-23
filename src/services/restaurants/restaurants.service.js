import { mocks } from "./mock";
import camelize from "camelize";
import { camelCase } from "lodash";

export const restaurantRequest = (location = "51.219448,4.402464") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantTransform = ({ result = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporary: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  //   newResult.someExtraProperty = 'new'
  return camelize(mappedResults);
};
