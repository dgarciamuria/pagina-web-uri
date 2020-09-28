import { extractSliceData } from "../../src/utils";
import { Client } from "../../prismic";
import NextLink from "next/link";
import { RichText, Date as PDate } from "prismic-reactjs";
import { Footer } from "../../src/Footer";
import Link from "next/link";
import { Anuncios } from "../../src/Anuncios";
import Head from "next/head";

const Page = ({ posteos, hasNext, hasPrev, currentPage, anuncios }) => {
  return (
    <div className="grid">
      <Head>
        <title>UriVida|Salud|Blog</title>
      </Head>
      <section className="section-blog">
        <h4 className="section-blog-titulo">Salud</h4>
        <h3 className="section-blog-titulo-2">Blog</h3>
        {posteos.map(({ titulo1, imagen, descripcion, fecha }, idx) => (
          <div key={`${idx}`} className="section-blog-contenido--articulo">
            <Link
              href="/blog/detalle/[name]"
              as={`/blog/detalle/${RichText.asText(titulo1)
                .toLowerCase()
                .replace(/\s/g, "-")}`}
            >
              <a>
                <img
                  className="section-blog-contenido--imagen"
                  src={imagen.url}
                />
              </a>
            </Link>
            <div className="section-blog-contenido--texto">
              <h6 className="blog-articulo-redes--fecha">
                {PDate(fecha ?? new Date()).toLocaleDateString()}
              </h6>
              <Link
                href="/blog/detalle/[name]"
                as={`/blog/detalle/${RichText.asText(titulo1)
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                <a className="blog-articulo-titulo">
                  <h4 className="blog-articulo-titulo">
                    {RichText.asText(titulo1)}
                  </h4>
                </a>
              </Link>
              <p className="blog-articulo-texto">
                {RichText.asText(descripcion).length > 450
                  ? `${RichText.asText(descripcion).substr(0, 450)}...`
                  : RichText.asText(descripcion)}
              </p>

              {/* <hr className="blog-articulo-redes--linea" />
            <h6 className="blog-articulo-redes--titulo">Compartir en:</h6>
            <div>
              <a href="#">
                <iconify-icon
                  className="blog-articulo-redes--icono"
                  data-icon="ant-design:facebook-filled"
                ></iconify-icon>
              </a>
              <a href="#">
                <iconify-icon
                  className="blog-articulo-redes--icono"
                  data-icon="ant-design:linkedin-filled"
                ></iconify-icon>
              </a>
              <a href="#">
                <iconify-icon
                  className="blog-articulo-redes--icono"
                  data-icon="ant-design:twitter-square-filled"
                ></iconify-icon>
              </a>
            </div> */}
            </div>
          </div>
        ))}
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            {hasPrev ? (
              <li className="page-item">
                <NextLink href="/blog/[page]" as={`/blog/${currentPage - 1}`}>
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
                <NextLink href="/blog/[page]" as={`/blog/${currentPage + 1}`}>
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
  const page = await Client().getSingle("blog");
  const { data } = page;
  const posteos = Array(
    Math.ceil(extractSliceData(data, "posteos").length / 5)
  ).fill(1);
  if (posteos.length === 0) {
    posteos.push(1);
  }
  return {
    paths: posteos.map((_, idx) => ({ params: { page: `${idx}` } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params = {} }) => {
  const anunciosPage = await Client().getSingle("anuncios");
  const anuncios = extractSliceData(anunciosPage.data, "anuncios");
  const { page: pageOffset } = params;
  const page = await Client().getSingle("blog");
  const { data } = page;
  const currentPage = parseInt(pageOffset);
  const offset = currentPage * 5;
  const allPosts = extractSliceData(data, "posteos");
  const posteos = allPosts.slice(offset, offset + 5);
  const hasNext = !!allPosts[offset + 6];
  const hasPrev = pageOffset > 0;

  return {
    props: {
      currentPage,
      posteos,
      hasNext,
      hasPrev,
      anuncios,
    },
    revalidate: 30,
  };
};

export default Page;
