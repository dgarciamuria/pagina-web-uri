import { Client } from "../prismic";
import { extractSliceData } from "../src/utils";
import Head from "next/head";

import { Footer } from "../src/Footer";
import { Anuncios } from "../src/Anuncios";
import { Novedades } from "../src/Novedades";

const Page = ({ anuncios, novedades }) => (
  <div className="grid">
    <Head>
      <title>UriVida|Osdepym</title>
    </Head>
    <section className="section-osdepym">
      <h4 className="section-osdepym-titulo">
        <img src="/osdepym.png" alt="logo-osdepym" width="200" height="50" />
      </h4>

      <h4 className="h4-form-osdepym">Solicita Asesor de Ventas</h4>
      <form
        action="https://formsubmit.co/pedro@uridesarrollos.com.ar"
        method="POST"
        className="speaker-form content"
        className="containerForm-osdepym"
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
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input type="hidden" name="_captcha" value="false" />

        <div className="form-group">
          <div className="form-group-1">
            <label className="form-text" htmlFor="nombre">
              Nombre y Apellido
            </label>
            <input
              type="text"
              name="nombre y apellido"
              className="form-control"
              required
            />

            <label className="form-text" htmlFor="fecha de nacimiento">
              Fecha de nac.
            </label>
            <input
              type="text"
              name="fecha de nacimiento"
              className="form-control"
              required
            />

            <label className="form-text" htmlFor="domicilio">
              Domicilio
            </label>
            <input
              type="text"
              name="domicilio"
              className="form-control"
              required
            />

            <label className="form-text" htmlFor="provincia">
              Provincia
            </label>
            <input
              type="text"
              name="provincia"
              className="form-control"
              required
            />

            <label className="form-text" htmlFor="ciudad">
              Ciudad
            </label>
            <input
              type="text"
              name="ciudad"
              className="form-control"
              required
            />
          </div>
          <div className="form-group-2">
            <label className="form-text" htmlFor="prepaga">
              Prepaga Actual
            </label>
            <input
              type="text"
              name="prepaga"
              className="form-control"
              required
            />

            <label
              className="form-text"
              className="form-text"
              htmlFor="telefono"
            >
              Teléfono
            </label>
            <input type="tel" name="phone" className="form-control" required />

            <label className="form-text" htmlFor="email">
              Email{" "}
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              required
            />

            <label className="form-text" htmlFor="exampleFormControlTextarea1">
              Deja tu consulta
            </label>
            <textarea
              className="form-control"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
        </div>
        <button className="form-boton" type="submit">
          Enviar
        </button>
      </form>

      <h2 className="h2-osdepym">Novedades Osdepym</h2>
      <h3 className="h3-osdepym">Visita nuestra Página.</h3>
      <span
        id="flecha-osdepym"
        className="iconify"
        data-icon="eva:arrow-ios-downward-fill"
        data-inline="false"
      ></span>
      <a
        className="imagen-osdepym-link"
        href="http://www.osdepym.com.ar/PortalCMS/app.htm"
      >
        <img src="/osdepym.png" width="200" height="50" alt="osdepym" />
      </a>
      <Novedades publicidad={novedades} />
    </section>
    <Footer />
  </div>
);

export const getStaticProps = async () => {
  const homePage = await Client().getSingle("home_page");
  const novedades = extractSliceData(homePage.data, "publicidad");
  const page = await Client().getSingle("anuncios");
  const anuncios = extractSliceData(page.data, "anuncios");
  return {
    props: {
      novedades,
      anuncios,
    },
    revalidate: 30,
  };
};

export default Page;
