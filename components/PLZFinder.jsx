/* 
Teil der PLZ- und Bezirkssuche -> leider nicht fertig geworden
nach Eingabe einer PLZ oder eines Standortes hätte dieser im Fokus der Straßenkarte erscheinen sollen
*/

import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';

/* 
Auslesen der zipcode.js-Dateien 
*/
const plzDataB = require('../library/zipcodes.berlin.json');
// console.log(plzDataB);
const plzDataD = require('../library/zipcodes.de.json');
// console.log(plzDataD);

/* Mitte Deutschlands: "latitude":"51.2125","longitude":"9.4208", zoom = 6 */
// const defaultCenter = { lat: 51.2125, lng: 9.4208 };
// const defaultZoom = 6;

// Regierungssitz / Bundestag
const defaultCenter = { lat: 52.5179, lng: 13.3759 };
const defaultZoom = 11;

// const myTestPosition = { lat: 52.5179, lng: 13.3759 };

/*
Bereich mit Straßenkarte
bisher nur Ausgabe aller gefunden PLZ-Bezirke aus der zipcode-Datei
*/
export default function PLZFinder() {
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const [zoom, setZoom] = useState(defaultZoom);
  const [locations, setLocations] = useState(plzDataB);

  console.log('PLZ-Finder gestartet');

  return (
    <article className="leaflet">
      <MapContainer
        /* 
      Die Props von MapContainer werden nur beim ersten Rendern der Karte
    	berücksichtig, spätere Änderungen haben keine Auswirkung! 
      */
        // center={defaultCenter}
        center={mapCenter}
        // zoom={defaultZoom}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        {/* 
        MapController hat Zugriff auf die Leaflet-Karte, Änderungen bei
      	den Props haben Auswirkungen. 
        */}
        <MapController center={mapCenter} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map(({ zipcode, place, district, latitude, longitude }) => (
          <Marker key={[latitude, longitude]} position={[latitude, longitude]}>
            <Popup>
              {zipcode} {place} <br />
              <strong> Bezirk{district} </strong>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </article>
  );
}

function MapController({ center, zoom }) {
  /* map enthält die Leaflet-Instanz. */
  const map = useMap();
  // console.log(map);

  useEffect(() => map.setView(center, zoom), [center, zoom, map]);
  return null;
}
