import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantSerive = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};

export const restaurantTransFormData = ({ results = [] }) => {
  const mappedresult = results.map((res) => {
    res.photos = res.photos.map((photo) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...res,
      address: res.vicinity,
      isOpenNow: res.opening_hours && res.opening_hours.open_now,
      isCloseTemporarily: res.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedresult);
};

restaurantSerive()
  .then(restaurantTransFormData)
  .catch((err) => console.log(err));
