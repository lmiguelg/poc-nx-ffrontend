import { businessLogic } from '@poc-nx-frontend/business-logic';
import { Banner } from '@poc-nx-frontend/common-ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const businessTitle = businessLogic();

  return (
    <>
      <Head>
        <title>Welcome to app1!</title>
      </Head>
      <main className="app">
        <h4>{businessTitle}</h4>
        <Banner />

        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
