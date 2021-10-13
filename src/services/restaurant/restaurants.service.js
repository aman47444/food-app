import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantSerive = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Not Found");
    }
    resolve(mock);
  });
};

const restaurantTransFormData = ({ results = [] }) => {
  const mappedresult = results.map((res) => {
    return {
      ...res,
      isOpenNow: res.opening_hours && res.opening_hours.open_now,
      isCloseTemporarily: res.business_status === "CLOSED_TEMPORARILY",
    };
  });
  console.log(mappedresult);
  return camelize(mappedresult);
};

restaurantSerive()
  .then(restaurantTransFormData)
  .catch((err) => console.log(err));
