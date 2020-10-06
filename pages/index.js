import { RichText, Link } from "prismic-reactjs";
import { Client } from "../prismic";
import { extractSliceData } from "../src/utils";
import { Footer } from "../src/Footer";
import { Novedades } from "../src/Novedades";

const Index = ({ latestPosts, latestVideos }) => {
  return (
    <div className="grid">
      <section>
        <h1 className="h1-index">
          <strong>U</strong>ri<strong>V</strong>ida
        </h1>
        <hr className="h1-borde"></hr>
        <h5 className="h5-index">Sigamos en contacto</h5>
        <button
          type="button"
          id="boton-subscribirse"
          data-toggle="modal"
          data-target="#myModal"
        >
          Subscribirse
        </button>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Subscribirse</h5>
              </div>

              <div className="modal-body">
                <form
                  action="https://formsubmit.co/pedro@uridesarrollos.com.ar"
                  method="POST"
                  className="speaker-form content"
                  className="containerForm"
                >
                  <input
                    type="hidden"
                    name="_next"
                    value="http://urivida.com.ar/gracias"
                  />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nuevo mensaje, desde UriVida!"
                  />
                  <input
                    type="text"
                    name="_honey"
                    style={{ display: "none" }}
                  />
                  <input type="hidden" name="_captcha" value="false" />
                  <ul className="form">
                    <li>
                      <label htmlFor="nombre">Nombre y Apellido:</label>
                    </li>
                    <li>
                      <input type="text" name="name" required />
                    </li>
                    <li>
                      <label htmlFor="fecha de nacimiento">
                        Fecha de nacimiento:
                      </label>
                    </li>
                    <li>
                      <input type="text" name="fecha de nacimiento" required />
                    </li>
                    <li>
                      <label htmlFor="domicilio">Domicilio:</label>
                    </li>
                    <li>
                      <input type="text" name="domicilio" required />
                    </li>
                    <li>
                      <label htmlFor="actividad">Actividad:</label>
                    </li>
                    <li>
                      <input type="text" name="actividad" required />
                    </li>
                    <li>
                      <label htmlFor="email">Email:</label>
                    </li>
                    <li>
                      <input type="email" name="email" required />
                    </li>
                    <li>
                      <label htmlFor="tel">WhatsApp:</label>
                    </li>
                    <li>
                      <input type="tel" name="phone" required />
                    </li>
                    <li>
                      <input
                        className="botonEnviar"
                        type="submit"
                        value="Enviar"
                      />
                    </li>
                  </ul>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  id="boton-close-modal"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="h2-index">Novedades</h2>

        <Novedades blogs={latestPosts} videos={latestVideos} />
      </section>
      <Footer />
    </div>
  );
};

export default Index;

export const getStaticProps = async () => {
  const blogPage = await Client().getSingle("blog");
  const { data: blogData } = blogPage;
  const latestPosts = extractSliceData(blogData, "posteos")
    .reverse()
    .slice(0, 3);
  const videoPage = await Client().getSingle("videos");
  const { data: videoData } = videoPage;
  const latestVideos = extractSliceData(videoData, "videos")
    .reverse()
    .slice(0, 3);

  return {
    props: {
      latestPosts,
      latestVideos,
    },
    revalidate: 30,
  };
};
