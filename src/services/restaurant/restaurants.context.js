import React, {
  useMemo,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import { LocationContext } from "../locations/locations.context";
import {
  restaurantSerive,
  restaurantTransFormData,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retriveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurant([]);
    setTimeout(() => {
      restaurantSerive(`${loc}`)
        .then(restaurantTransFormData)
        .then((res) => {
          setRestaurant(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err), setIsLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retriveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{ restauants: restaurant, isLoading, error }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
