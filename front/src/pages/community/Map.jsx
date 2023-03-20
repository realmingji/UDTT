import React, { useEffect, useState } from 'react';

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.524823, 126.980454),
      level: 8,
    };
    var map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{ width: '1000px', height: '600px', margin: 'auto' }}
      ></div>
    </div>
  );
};

export default Map;
