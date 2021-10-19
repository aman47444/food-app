import React, { useState, useEffect, useContext } from "react";
import { LocationContext } from "../../../services/locations/locations.context";
import { MapSearch } from "../component/map-search.component";
import { Map } from "./map.style";
import { RestaurantsContext } from "./../../../services/restaurant/restaurants.context";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { MapCallout } from "../component/map-callout.component";

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restauants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <MapSearch />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restauants.map((res) => {
          return (
            <MapView.Marker
              key={res.name}
              title={res.name}
              coordinate={{
                latitude: res.geometry.location.lat,
                longitude: res.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant: res })
                }
              >
                <MapCallout restaurant={res} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};
