// Startseite - Home
import Layout from '../components/Layout';
import welcome from '@/img/willkommen.png';
import Image from 'next/image';

export default function home() {
  return (
    // https://www.indifferentlanguages.com/de/wort/willkommen
    <Layout title="Website with NextJS">
      {/* inner-HTML sind die Kindelemente, die als children ausgelesen werden */}
      <div className="header-main home">
        <h2>
          Welome - Willkommen - Bienvenue - добро пожаловать - 欢迎 -
          καλωσόρισμα - მისასალმებელი - באַגריסן -{' '}
        </h2>
      </div>{' '}
      <div className="intro">
        <p>
          Wir, Marco Grahl und Constanze Deten, haben hier Unterhaltsames für
          den Aufenthalt in Berlin zusammengestellt.
          <br />
          Viel Vergnügen beim Stöbern!
        </p>
        <Image
          /* 
          enn man ein Bild, das auf dem Server liegt, zuvor importiert
          und bei src einsetzt, kann man width und height weglassen.
          */
          src={welcome}
          // width={5184}
          // height={3456}
          sizes="(max-width: 52rem) 90vw, 50rem"
          layout="responsive"
          placeholder="blur"
          alt="Willkommen multilingual"
          title="Willkommen multilingual"
        />
      </div>
    </Layout>
  );
}
