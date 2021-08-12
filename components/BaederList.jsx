// Teil der Seite Berlin geht baden...
import Link from 'next/link';
import BadItem from './BadItem';

// übergeordnete Seite zu den einzelnen Bädern
export default function BadList({ baederWeb, title = '' }) {
  /* 
  da die Bad-ID in den bereit gestellten Daten von den Bild-ID abweicht, 
  wird hier mit einem work-around gearbeitet 
  */
  let countBadNo = 0;

  return (
    <section className="bad-list">
      {title && (
        <h2 className="bad-list__title">
          <Link href="https://www.badestellen.berlin.de">
            <a
              target="_blank"
              rel="noreferrer"
              title="Link zur Informations-Quelle badestellen.berlin.de"
            >
              {title}
            </a>
          </Link>
        </h2>
      )}
      <div className="bad-grid">
        {baederWeb.map((feature) => {
          countBadNo += 2;
          return (
            <BadItem
              key={feature.properties.id}
              countBadNo={countBadNo}
              {...feature}
            />
          );
        })}
      </div>
    </section>
  );
}
