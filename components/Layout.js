import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children, title = 'Tomukun', description = 'Tomukun — Korean BBQ & Noodle Bar in Ann Arbor, MI.' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* TODO: replace with client-provided og:image once photography is available */}
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="icon" type="image/svg+xml" href="/brand/favicon.svg" />
        <link rel="alternate icon" href="/brand/favicon.ico" />
      </Head>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
