// responsive Navi zum Wechseln zwischen den Seiten
import Link from 'next/link';

export default function Navigation() {
  return (
    <>
      <nav className="site-navigation">
        <div className="topnav" id="myTopnav">
          <Link href="/">
            <a className="active">
              <i className="fa fa-anchor" style={{ fontSize: 16 }}></i>
            </a>
          </Link>
          <Link href="/Quiz">
            <a>Besuchen</a>
          </Link>
          <Link href="/baeder">
            <a>Baden</a>
          </Link>
          <Link href="/plzfinder">
            <a>PLZ-Suche</a>
          </Link>
          <Link href="/funstuff">
            <a>Fun-Stuff</a>
          </Link>
          <Link href="/impressum">
            <a>Impressum</a>
          </Link>

          <Link href="/" passHref>
            <button
              className="icon"
              onClick={(e) => {
                e.preventDefault();
                let x = document.getElementById('myTopnav');
                if (x.className === 'topnav') {
                  x.className += ' responsive';
                } else {
                  x.className = 'topnav';
                }
              }}
            >
              <i className="fa fa-bars"></i>
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
