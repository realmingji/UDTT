import React, { useEffect } from 'react';
import { markerdata } from './data/MapData';

const { kakao } = window;

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.535865538724074, 126.97672632876493),
      level: 8,
    };

    //map
    const map = new kakao.maps.Map(container, options);

    markerdata.forEach(el => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(el.lat, el.lng),
        title: el.title,
      });
    });
  };

  return (
    <div
      id="map"
      style={{
        width: '1000px',
        height: '500px',
        margin: 'auto',
        marginBottom: '20px',
      }}
    ></div>
  );
}
