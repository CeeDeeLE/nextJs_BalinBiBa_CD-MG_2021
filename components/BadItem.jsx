/* 
Teil der Seite Berlin geht baden...

Wenn Daten zur Verfügung stehen, dann sollen sie eigentlich von hier kommen:
https://www.berlin.de/lageso/gesundheit/gesundheitsschutz/badegewaesser/liste-der-badestellen/index.php
https://www.badestellen.berlin.de/#/ (Bild-Quelle und zufälliges Vorbild)
Video: https://www.berlin.de/lageso/gesundheit/gesundheitsschutz/badegewaesser/
Video: <iframe width="560" height="315" src="https://www.youtube.com/embed/G02JLwsBe4A?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
https://www.umweltbundesamt.de/wasserqualitaet-in-badegewaessern#wie-erhalte-ich-informationen-zur-aktuellen-badegewasserqualitat
*/

// Infos zu den gelisteten Bädern werden ausgegeben
export default function BadItem({ geometry, properties, countBadNo }) {
  return (
    <article className="bad-item">
      <h3 className="bad-item__title">
        <a
          href={`https://www.badestellen.berlin.de/#/detail/${countBadNo}`}
          target="_blank"
          rel="noreferrer"
        >
          {properties.title}
        </a>
      </h3>
      <div>
        Quelle: LaGeSo
        <br />
        Datum: {new Date(properties.data.dat).toLocaleDateString()}
      </div>
      <div className="bad-item__content">
        <p>
          <img
            className="bad-item__image"
            src={`./img/badestelle_${countBadNo}.jpg`}
            alt="Bild zur Nachricht"
            title="Bild zur Nachricht"
          />
        </p>
        <p>
          Qualität:&nbsp;
          {properties.data.farbe.split('.')[0]}
          <br />
          Temperatur: {properties.data.temp} °C
          <br />
          Sichttiefe: {properties.data.sicht} cm
          <br />
          <br />
          intestinale Enterokokken: {properties.data.ente} /100 ml
          <br />
          Escherichia coli: {properties.data.eco}/ 100 ml
        </p>
        <p className="bad-item__description">
          Standort (Geo-Daten): <br />
          {geometry.coordinates[1]}, {geometry.coordinates[0]}
        </p>
      </div>
    </article>
  );
}
