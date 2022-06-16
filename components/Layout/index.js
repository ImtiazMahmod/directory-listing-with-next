import Head from 'next/head';
import Footer from './Footer';

import Header from './Header';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>Softfy | {title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;