// Teil des Layouts -> Beginn des Body -> Header-Bereich der Seite
import Navigation from './Navigation';

export default function Header({ title }) {
  return (
    <header className="site-header inner-width">
      {/**
      eslint schlägt Image statt img als bevorzugte Lösung vor 
      -> ist deaktiviert, geht jetzt beides 
      */}
      <div className="site-header__logo">
        <div className="site-header__logo-bild">
          <img
            // +++ !!! unbedingt nochmal ändern -> es gibt bessere Lademöglichkeiten !!! +++
            src="/img/logo-bildteil.jpg"
            srcSet="/img/logo-bildteil.jpg 1x, /img/logo-bildteil.jpg 2x"
            width="150vw"
            height="100%"
            loading="lazy"
            alt="Logo"
            title="Logo"
          />
        </div>
        <div className="site-header__logo-text"></div>
      </div>
      <Navigation />
      <h1>{title}</h1>
    </header>
  );
}
