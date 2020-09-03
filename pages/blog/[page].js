import { extractSliceData } from "../../src/utils";
import { Client } from "../../prismic";
import NextLink from "next/link";
import { RichText, Date as PDate } from "prismic-reactjs";
import { Footer } from "../../src/Footer";
import Link from "next/link";

const Page = ({ posteos, hasNext, hasPrev, currentPage }) => {
  return (
    <div className="grid">
      <section className="section-blog">
        <h4 className="section-blog-titulo">Salud</h4>
        <h3 className="section-blog-titulo-2">Blog</h3>
        {posteos.map(({ titulo1, imagen, descripcion, fecha }, idx) => (
          <div key={`${idx}`} className="section-blog-contenido--articulo">
            <img className="section-blog-contenido--imagen" src={imagen.url} />
            <div className="section-blog-contenido--texto">
              <h6 className="blog-articulo-redes--fecha">
                {PDate(fecha).toLocaleDateString()}
              </h6>
              <Link
                href="/blog/detalle/[name]"
                as={`/blog/detalle/${RichText.asText(titulo1)
                  .toLowerCase()
                  .replace(/\s/g, "-")}`}
              >
                <a class="blog-articulo-titulo">
                  <h4 className="blog-articulo-titulo">
                    {RichText.asText(titulo1)}
                  </h4>
                </a>
              </Link>
              <p className="blog-articulo-texto">
                {RichText.asText(descripcion)}
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

        <div className="container text-center my-3">
          <div className="row mx-auto my-auto">
            <div
              id="myCarousel"
              className="carousel slide w-100"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item py-5 active">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <a href="http://www.osdepym.com.ar/PortalCMS/app.htm">
                            <img
                              src="/osdepym.png"
                              width="200"
                              height="70"
                              alt="logo-osdepym"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <a href="https://farmaciadelpuente.com.ar/">
                            <img
                              src="/farmacia-del-puente.png"
                              width="200"
                              height="70"
                              alt="logo-farmacia-del-puente"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item py-5">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <a href="http://www.osdepym.com.ar/PortalCMS/app.htm">
                            <img
                              src="/osdepym.png"
                              width="200"
                              height="70"
                              alt="logo-osdepym"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <a href="https://farmaciadelpuente.com.ar/">
                            <img
                              src="/farmacia-del-puente.png"
                              width="200"
                              height="70"
                              alt="logo-farmacia-del-puente"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item py-5">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <a href="http://www.osdepym.com.ar/PortalCMS/app.htm">
                            <img
                              src="/osdepym.png"
                              width="200"
                              height="70"
                              alt="logo-osdepym"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <a href="https://farmaciadelpuente.com.ar/">
                            <img
                              src="/farmacia-del-puente.png"
                              width="200"
                              height="70"
                              alt="logo-farmacia-del-puente"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item py-5">
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <a href="http://www.osdepym.com.ar/PortalCMS/app.htm">
                            <img
                              src="/osdepym.png"
                              width="200"
                              height="70"
                              alt="logo-osdepym"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="card">
                        <div className="card-body">
                          <a href="https://farmaciadelpuente.com.ar/">
                            <img
                              src="/farmacia-del-puente.png"
                              width="200"
                              height="70"
                              alt="logo-farmacia-del-puente"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                  <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
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
  const { page: pageOffset } = params;
  const page = await Client().getSingle("blog");
  const { data } = page;
  const currentPage = parseInt(pageOffset);
  const allPosts = extractSliceData(data, "posteos");
  const posteos = allPosts.slice(pageOffset, 5);
  const hasNext = !!allPosts[currentPage + 6];
  const hasPrev = pageOffset > 0;

  return {
    props: {
      currentPage,
      posteos,
      hasNext,
      hasPrev,
    },
    revalidate: 30,
  };
};

export default Page;
