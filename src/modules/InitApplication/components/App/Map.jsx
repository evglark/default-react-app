import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';

import { mapData } from './mapData';

const geographyStyle = {
  default: {
    outline: 'none',
  },
  hover: {
    outline: 'none',
    fill: '#FF331F',
  },
  pressed: {
    outline: 'none',
  },
};

export const Map = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{ scale: 3500, center: [19, 52] }}
      stroke="black"
      fill="white"
    >
      <Geographies geography={mapData.data}>
        {(geographies) => (
          <>
            {geographies.geographies.map((geo) => (
              <Geography
                onClick={() => console.log(geo.properties.VARNAME_1)}
                geography={geo}
                style={geographyStyle}
                key={geo.rsmKey}
              />
            ))}
          </>
        )}
      </Geographies>
    </ComposableMap>
  );
};
