import React from 'react';

import { Map } from './Map';
import './style.scss';

export const App = () => {
  return (
    <div className="app">
      <div className="mapContainerWrapper">
        <div className="mapContainer">
          <Map/>
        </div>
      </div>
    </div>
  );
};
