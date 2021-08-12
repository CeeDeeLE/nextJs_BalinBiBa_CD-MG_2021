// PLZ- und Bezirkssuche
import Layout from '../components/Layout';
import Filter from '@/components/FilterZipCode';

// als Ersatz für den fehlenden Daten-Import aus
const zipcode = null;

// ############## Ergebnis-Export -> Anzeige der Berliner Bezirke im Browser
function Map() {
  // Ende Test
  return (
    <Layout title="PLZ-Suche mit Markierung des Ortes in der Karte">
      <div className="intro">
        <p className="bbezirke-svg">
          Berlin ist groß - und Postleitzahl ist nicht gleich Bezirk. Wir
          möchten Ihnen die Suche mit diesem Angebot etwas erleichtern.
          <br /> <br /> Sie haben 2 Möglichkeiten, es zu nutzen.
          <br /> 1. Sie wählen ein PLZ-Gebiet in der grünen Karte und erhalten
          PLZ sowie eine Detail-Ansicht in der Stra&szlig;enkarte.
          <br /> 2. Sie geben direkt eine PLZ in des Eingabefeld ein und
          erhalten sofort die Detail-Ansicht in der Stra&szlig;enkarte.
        </p>

        <section id="plz-map">
          <Filter />
        </section>
      </div>
    </Layout>
  );
}

export default (zipcode, Map);
