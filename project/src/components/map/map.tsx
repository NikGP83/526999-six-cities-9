// import { useEffect, useRef } from "react";
// import leaflet from 'leaflet';
// import useMap from "../../hooks/use-map";
// import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from "../../const";
// import { useAppSelector } from "../../hooks";


function Map() {
  // const mapRef = useRef(null);
  // const coordinates = useAppSelector((data) => data.data);
  // console.log(coordinates)
  // const map = useMap(mapRef, city);

  // const defaultCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER_DEFAULT,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER_CURRENT,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  // useEffect(() => {
  //   if (map) {
  //     points.forEach((point) => {
  //       leaflet
  //         .marker({
  //           lat: point.lat,
  //           lng: point.lng,
  //         }, {
  //           icon: defaultCustomIcon,
  //         })
  //         .addTo(map);
  //     });
  //   }
  // }, [map, points]);
  return (
    <section  className='cities__map map'></section>
    // ref={mapRef}
  );
}

export default Map;
