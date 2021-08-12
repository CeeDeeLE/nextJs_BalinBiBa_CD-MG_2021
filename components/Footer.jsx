// Teil des Layouts -> Footer-Bereich der Seite
export default function Footer() {
  return (
    <footer className="site-footer inner-width">
      <div className="site-footer__inner-content">
        &copy; C. Deten, Marco Grahl - NextJS-Project {new Date().getFullYear()}
      </div>
    </footer>
  );
}
