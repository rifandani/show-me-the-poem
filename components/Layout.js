import Head from 'next/head';
import Navbar from './Navbar';
import ResponsiveContainer from './ResponsiveNavbar';

const name = 'Tri Rizeki Rifandani';
const siteTitle = 'Show Me The Poem';

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          name="description"
          content="Express your feelings through words. Because words is sharper than any blades."
        />
        <meta
          name="keywords"
          content="NextJS, ReactJS, SemanticUI, MongoDB, Mongoose, PWA, Show Me The Poem "
        />
        <meta name="author" content={name} />
        <meta name="twitter:card" content={name} />
        <meta name="og:title" content={siteTitle} />
        <title>{siteTitle}</title>

        <link rel="icon" href="/favicon.ico" />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <meta name="theme-color" content="#9932CC" />
      </Head>

      {/* <Navbar /> */}
      <ResponsiveContainer />
      <main>{children}</main>
    </>
  );
}
