import { extractSliceData } from "../../src/utils";
import { Client } from "../../prismic";
import NextLink from "next/link";
import { RichText, Link } from "prismic-reactjs";
import { Footer } from "../../src/Footer";
import { Anuncios } from "../../src/Anuncios";
import Head from "next/head";

const Page = ({ videos, hasNext, hasPrev, currentPage, anuncios }) => {
  return (
    <div className="grid">
      <Head>
        <title>UriVida|Salud|Videos</title>
      </Head>
      <section className="section-videos">
        <h4 className="section-blog-titulo">Salud</h4>
        <h3 className="section-blog-titulo-2">Videos</h3>
        {videos.map(({ titulo, link }, idx) => (
          <div key={`${idx}`} className="card-body-videos">
            <iframe
              className="card-body-videos--video"
              width="250"
              height="140"
              src={Link.url(link)}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h4 className="card-body-videos--titulo">
              {RichText.asText(titulo)}
            </h4>
            <a href={Link.url(link)}>
              <button
                type="button"
                id="boton-leer-mas"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Ir al video
              </button>
            </a>
          </div>
        ))}

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {hasPrev ? (
              <li className="page-item">
                <NextLink
                  href="/videos/[page]"
                  as={`/videos/${currentPage - 1}`}
                >
                  <a className="page-link" aria-label="Previous">
                    <span
                      id="pagination-icono"
                      className="iconify"
                      data-icon="foundation-arrow-left"
                      data-inline="false"
                    ></span>
                  </a>
                </NextLink>
              </li>
            ) : null}
            {hasNext ? (
              <li className="page-item">
                <NextLink
                  href="/videos/[page]"
                  as={`/videos/${currentPage + 1}`}
                >
                  <a className="page-link" aria-label="Next">
                    <span
                      id="pagination-icono"
                      className="iconify"
                      data-icon="foundation-arrow-right"
                      data-inline="false"
                    ></span>
                  </a>
                </NextLink>
              </li>
            ) : null}
          </ul>
        </nav>

        <Anuncios anuncios={anuncios} />
      </section>
      <Footer />
    </div>
  );
};

export const getStaticPaths = async () => {
  const page = await Client().getSingle("videos");
  const { data } = page;
  const videos = Array(
    Math.ceil(extractSliceData(data, "videos").length / 3)
  ).fill(1);
  if (videos.length === 0) {
    videos.push(1);
  }
  return {
    paths: videos.map((_, idx) => ({ params: { page: `${idx}` } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params = {} }) => {
  const anunciosPage = await Client().getSingle("anuncios");
  const anuncios = extractSliceData(anunciosPage.data, "anuncios");
  const { page: pageOffset } = params;
  const page = await Client().getSingle("videos");
  const { data } = page;
  const currentPage = parseInt(pageOffset);
  const allVideos = extractSliceData(data, "videos").reverse();
  const videos = allVideos.slice(pageOffset, 3);
  const hasNext = !!allVideos[currentPage + 4];
  const hasPrev = pageOffset > 0;

  return {
    props: {
      anuncios,
      currentPage,
      videos,
      hasNext,
      hasPrev,
    },
    revalidate: 30,
  };
};

export default Page;
