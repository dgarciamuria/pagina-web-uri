import Head from "next/head";
import "../styles/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>UriVida</title>
        <Component {...pageProps} />
      </Head>
    </>
  );
}

export default MyApp;
