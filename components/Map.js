import { useState } from "react";
import ReactMapGL from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map() {
  

  //   Transform the search result object into the
  // {latitude 52.4465454, longitude: 122.15}

//   const coordinate = searchResults.map((result) => ({
//     longitude: result.log,
//     latitude: result.lat,
//   }));

//   const center = getCenter(coordinate);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 28.7041,
    longitude: 77.1025,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/ajaypradhan02/ckstsyo1a088p17qi45orvqf7"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    />
  );
}

export default Map;
