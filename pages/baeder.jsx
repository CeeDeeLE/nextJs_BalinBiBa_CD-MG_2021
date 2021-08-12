// Seite Berlin geht baden...
// Quelle: https://newsapi.org/
// Add geojson: https://egghead.io/lessons/react-add-geojson-location-data-to-a-map-using-markers-and-popups-in-react-leaflet

import Layout from '@/components/Layout';
import BaederList from '@/components/BaederList';

import dynamic from 'next/dynamic';
/* dynamisches Laden von: https://nextjs.org/docs/advanced-features/dynamic-import */
const LocationFinder = dynamic(() => import('@/components/BadFinder'), {
  ssr: false,
});

// work-around für leider häufiger nicht verfügbare LaGeSo-Seite
const baederWebData = require('@/library/berlinerBaeder.json');

//
export async function getStaticProps() {
  // code, der nur auf dem Server läuft und im Browser nicht zu sehen ist
  let baederWeb = [];

  /* 
  Auslesen von im Web bereit gestellten Daten des LaGeSo Berlin
  bzw. des lokalen Spiegels
  */
  try {
    /*
    auskommentiert wegen Nichtverfügbarkeit der Seite des LaGeSo 
    -> nicht löschne!!!
    */
    // const response = await fetch(
    //   // urlWeb
    //   `https://www.berlin.de/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php/index/all.gjson?q=`
    // );
    // const baederWebData = await response.json();

    baederWeb = baederWebData.features;

    // wenn das Laden der Daten trotzdem fehlschlägt...
  } catch (error) {
    console.log('Fehler beim Laden der Baederinfos');
  }

  return {
    props: {
      grusz: 'Bitte auch den Wetterbericht beachten: 😉',
      // time: new Date().toLocaleTimeString(),
      baederWeb,
    },
    revalidate: 10,
  };
}

// Function musste 2x angelegt werden, da compilieren mit ungenutzen Var nicht mgl.
export default function baeder({ grusz, baederWeb }) {
  //
  return (
    <Layout title="Baden gehen... " description="">
      <div className="site-main">
        <br />
        {grusz}
        {/* <br/>es ist {time} */}
        <br />
        {/* Maßstab fehlt in Karte: console.log(length(200, 'm').to('in')) */}
        <br />
        <LocationFinder baederWeb={baederWeb} />
        <BaederList
          baederWeb={baederWeb}
          title="Bäder in und um Berlin - Infos zu Standort und Qualität"
        />
        <br />
      </div>
    </Layout>
  );
}
