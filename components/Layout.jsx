// das allen Seiten zu Grunde liegende Layout
import Head from 'next/head';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { NextScript } from 'next/document';

// diese function sollte eigentlich besser SEO heiszen
export default function Layout({ description, title, children }) {
  return (
    <>
      {/* 
      Head mit meta-Daten
      title im Head gibt den Titel im Reiter der WebSite aus 
      */}
      <Head>
        <title>{title || 'NextJS'}</title>
        <meta
          name="keywords"
          content="htmlcss bootstrap, multi level menu, submenu, treeview nav menu examples"
        />
        <meta
          name="description"
          content={
            description ||
            'Berlin, Baden und Bildung von Constanze Deten und Marco Grahl, 2021'
          }
        />
        <meta name="author" content="Constanze Deten, Marco Grahl" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content={
            description ||
            'Berlin, Baden und Bildung von Constanze Deten und Marco Grahl, 2021'
          }
        />
        <meta
          property="twitter:card"
          content="'Berlin, Baden und Bildung von Constanze Deten und Marco Grahl, 2021'"
        />
        {/* <meta property="twitter:creator" content={config.social.twitter} /> */}
        <meta property="twitter:title" content={title} />
        <meta
          property="twitter:description"
          content={
            description ||
            'Berlin, Baden und Bildung von Constanze Deten und Marco Grahl, 2021'
          }
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <NextScript />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            // hier kann JavaScript eingefügt werden
            __html: ``,
          }}
        />
      </Head>

      <div className="site-wrapper">
        {/* Header gibt den Titel auf der WebSite aus */}
        <Header title={title} />

        {/* children der Main sollen bevorzugt als inner-HTML ausgegeben werden */}
        {/* <Main children={children} /> */}
        <Main>{children}</Main>

        {/* Footer mit Copy-Right hat noch keine eigene .scss */}
        <Footer />
      </div>
    </>
  );
}
