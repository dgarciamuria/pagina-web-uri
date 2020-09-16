import Document, { Html, Main, NextScript, Head } from "next/document";
import { Nav } from "../src/Nav";
// import { Head } from "../src/Head";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Un espacio en el que encontrarás consejos y artículos para cuidar de tu salud y la de los tuyos."
          />
          <meta
            name="keywords"
            content="salud, articulos, videos, consejos,osepym,cuidado,enfermdades,bienestar"
          />

          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous"
          ></link>
          <link rel="apple-touch-icon" sizes="180x180" href="/" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="site.webmanifest"></link>
          <script
            src="https://kit.fontawesome.com/7a5f78019b.js"
            crossorigin="anonymous"
          ></script>
          <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
        </Head>
        <body>
          <Nav />
          <Main />

          <NextScript />
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
            integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
            integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
            crossorigin="anonymous"
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
