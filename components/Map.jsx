import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';
import { useState } from 'react';

// adding a wrapper to help with mapbox data

function Map(props) {
  // console.log(intPlaces);
  //keep track of the selected pin and the object that is related to it to match the popup
  const [displayedPlaces, setDisplayedPlaces] = useState(props.intPlaces);

  //return an Arr with the needed formating of the lan and lon that where inside the point key
  const coordinatesArr = displayedPlaces.map(({ point: { lat, lon } }) => ({
    latitude: lat,
    longitude: lon,
  }));

  // well guess we don't need the center here because we making a search in a Radius
  // but I will maybe Later use this... we do need it cause of the shuffle

  const centerCoordinate = getCenter(coordinatesArr);
  // console.log(centerCoordinate);

  const [viewport, setviewport] = useState({
    width: '100%',
    height: '100%',
    latitude: centerCoordinate.latitude,
    longitude: centerCoordinate.longitude,
    zoom: 10.5,
  });
  const markerStyle = {
    fontSize: '1.4rem',
  };

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/manograhl/cks65fk9x26wz18oyg6ujl8pf"
      mapboxApiAccessToken="pk.eyJ1IjoibWFub2dyYWhsIiwiYSI6ImNrczY0bm9pZDB6bjAycHBoaDJpeXB1NzkifQ.f1xceJ0LaDAZxqvi1jD_hQQ"
      // mapboxApiAccessToken={process.env.mapbox_key}
      // mapboxApiAccessToken={process.env.MAPBOX_KEY}
      {...viewport}
      // if the user wants to scroll and zoom it will update the viewport values,
      onViewportChange={(nextViewport) => setviewport(nextViewport)}
    >
      {/* Adding the marker and popup form react wrapper   */}
      {displayedPlaces.map((place) => (
        <div key={place.xid}>
          <Marker
            longitude={place.point.lon}
            latitude={place.point.lat}
            offsetLeft={-11}
            offsetTop={-22}
          >
            {/* we set the state to match the thing we clicked*/}
            <button
              className="pinButton"
              onClick={() => props.changeSelected(place)}
              style={markerStyle}
            >
              <span aria-label="clickable-pin" role="img">
                📍
              </span>
            </button>
          </Marker>
          {/* now we check if selectedPlace is true (pin is clicked), and when the longitude of the selected and the place that got mapped
            show the popup, if we close it reset the state         */}
          {props.selectedPlace &&
            props.selectedPlace.point.lon === place.point.lon && (
              <Popup
                // get rid of the selected pin and set selected to null
                onClose={() => {
                  setDisplayedPlaces(
                    displayedPlaces.filter(
                      (i) => i.xid !== props.selectedPlace.xid
                    )
                  );
                  props.changeSelected(null);
                }}
                // onClose={() => props.changeSelected(null)}
                closeOnClick={true}
                latitude={place.point.lat}
                longitude={place.point.lon}
              >
                <img
                  className="map-image"
                  src={place.preview.source}
                  alt={place.name}
                  height={place.preview.height}
                  width={place.preview.width}
                />
                {/* <span style={popupStyle}> {place.name}</span> */}
              </Popup>
            )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
