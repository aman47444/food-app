import React, { useState, useEffect, useContext } from "react";
import { MapSearch } from "../component/map-search.component";
import { Map } from "./map.style";

export const MapScreen = () => (
  <>
    <MapSearch />
    <Map />
  </>
);
