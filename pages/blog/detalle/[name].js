import { RichText, Date as PDate } from "prismic-reactjs";
import { Client } from "../../../prismic";
import { Footer } from "../../../src/Footer";
import { extractSliceData } from "../../../src/utils";

const Page = ({ post }) => {
  console.log(post.descripcion);
  return (
    <div className="grid">
      <section className="section-articulo">
        <h4 className="section-blog-titulo">Salud</h4>
        <div className="section-articulo-contenido--texto">
          <img
            className="section-articulo-contenido--imagen"
            src={post.imagen.url}
            alt="imagen-articulo"
          />

          <h4 className="articulo--titulo">{RichText.asText(post.titulo1)}</h4>

          {RichText.render(post.descripcion)}

          {/* <p className="articulo--texto">
          La pandemia de coronavirus agudiza todos los miedos y, también, los
          comportamientos para contrarrestarlos. Así, ante el miedo a
          contagiarse un virus desconocido, millones de personas se ponen hoy a
          lavar frenéticamente las compras del supermercado con lavandina. Pero
          los científicos aseguran que el COVID-19 se puede transmitir de
          persona a persona al respirar, estornudar, toser, hablar o cantar,
          pero no existe ninguna evidencia de que lo haga a través de la comida.
        </p>
        <p className="articulo--texto">
          “El riesgo reside en la interacción con otras personas, no en la
          comida”, enfatizan investigadores de la Universidad Cornell, en
          Estados Unidos. “No hay diferencia entre la comida cruda o la cocida”.
        </p>
        <p className="articulo--texto">
          Es cierto que los alimentos no transmiten en sí mismos el SARS-CoV-2,
          pero sí pueden contener microbios que intoxican al organismo humano.
          La Organización Mundial de la Salud (OMS) estima que 1 de cada 10
          personas se enferma cada año por una contaminación alimentaria. Las
          bacterias Escherichia coli y Salmonella suelen generar brotes
          gastrointestinales a través de alimentos crudos (huevos, mayonesa,
          helado, verduras, leche sin pasteurizar) o de carne poco cocida
          (hamburguesas). El norovirus es uno de los microbios más temidos en
          los cruceros, por los vómitos y diarrea que produce. En cuanto al
          bacilo Clostridium, puede crecer a sus anchas en mariscos y latas no
          bien esterilizadas, dando origen al botulismo.
        </p>
        <p className="articulo--texto">
          La Oficina de Drogas y Alimentos (FDA) de los Estados Unidos aconseja
          cocinar la carne de vaca a más de 60 grados centígrados y la de pollo,
          a más de 70 grados. Los platos con huevo, los guisos y las “sobras”
          también deben calentarse a más de 70 grados
        </p>
        <p className="articulo--texto">
          Por supuesto, es importante lavar con lavandina y agua las mesadas de
          cocina, incluso las de acero inoxidable, y no compartir cubiertos,
          vasos ni vajilla durante la pandemia. También se recomienda concurrir
          a comprar alimentos con una lista –para hacerlo más rápido- y usar
          tapabocas, limpiar el barral de los carros con alcohol o una toallita
          con desinfectante, no tocarse la cara y lavarse las manos con agua y
          jabón durante 20 segundos al regresar.
        </p>
        <p className="articulo--texto">
          Según la OMS, no es necesario limpiar uno por uno los alimentos
          envasados, pero sí se recomienda lavar las bolsas reutilizables y
          guardar los alimentos en la heladera en un máximo de dos horas.
        </p>
        <p className="articulo--texto">
          En caso de pedir la comida por sistema de “delivery” o “take away” es
          importante el lavado de manos del personal, mantener la distancia
          física en las colas y garantizar que se mantenga la temperatura del
          alimento comprado (frío o calor). No se aconseja que las personas que
          entregan comida a domicilio usen guantes, sino que se higienicen las
          manos entre pedidos y entregas.
        </p>
        <p className="articulo--texto">
          Las autoridades sanitarias insisten en que las fábricas de alimentos
          trabajen con medidas higiénicas que garanticen la seguridad de los
          alimentos. También enfatizan la necesidad de que los empleados de
          supermercados usen una protección adecuada. Pero ya se han producido
          varios brotes de COVID-19 en frigoríficos de Estados Unidos y, al
          menos uno, en la provincia de Buenos Aires. Es que los trabajadores de
          la carne suelen pasar largas horas en ambientes refrigerados y en
          estrecha proximidad unos con otros, dos características que ayudan a
          que el virus se disemine si alguien lo tiene. No sólo los alimentos
          industrializados corren riesgo de contaminación. También los llamados
          “orgánicos”, percibidos usualmente como más naturales y sanos, pueden
          contener microbios provenientes de aguas contaminadas o manipulación
          errónea. Las verduras y frutas deben lavarse bajo el chorro de agua de
          la canilla y, en lo posible, pasarles un cepillo limpio. No se
          aconseja usar jabón.
        </p>
        <p className="articulo--texto">
          Hay que considerar que la pandemia también pone en riesgo las cadenas
          de suministros. La carestía de los huevos, por ejemplo, se atribuyó en
          Estados Unidos a dificultades en el transporte y la comercialización.
          También la harina y otros productos alimenticios sufrieron faltantes
          por las vallas a la distribución global.
        </p>
        <p className="articulo--texto">
          La otra cara de la falta de acceso a los alimentos es el hambre y la
          desnutrición, a las que han sido empujadas millones de personas que
          han quedado sin trabajo en el mundo. Las colas para pedir comida se
          extienden tanto en la europea ciudad de Ginebra como en los
          asentamientos de Buenos Aires.
        </p>
        <p className="articulo--texto">
          Finalmente, ¿cambiarán los hábitos de comida durante la pandemia? Con
          el aislamiento, muchos se pusieron a cocinar, incluso, su propio pan.
          Pero los especialistas no están seguros de que cambien los hábitos
          alimentarios de cada lugar y persona. Mientras algunos deciden comer
          más frutas y verduras para mejorar su salud, otros incrementan los
          dulces, los snacks y las grasas durante el aislamiento, ya sea por
          aburrimiento o por estrés. Pero los especialistas advierten que,
          aunque estos alimentos reconfortan en el momento porque promueven la
          liberación de neurotransmisores ligados al placer, a largo plazo no
          sólo pueden generar un aumento de peso sino también disparar
          sentimientos depresivos y alterar el sueño.
        </p> */}
          <p className="articulo--firma">UriVida</p>

          <hr className="blog-articulo-redes--linea" />
          {/* <h6 className="blog-articulo-redes--titulo">Compartir en:</h6>
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
          <center>
            <a href="blog.html">
              <input
                className="articulos__boton--volver"
                type="button"
                value="Volver a página anterior"
              />
            </a>
          </center>
        </div>

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
                              src="multimedia/osdepym.png"
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
                              src="multimedia/farmacia-del-puente.png"
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
                              src="multimedia/osdepym.png"
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
                              src="multimedia/farmacia-del-puente.png"
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
                              src="multimedia/osdepym.png"
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
                              src="multimedia/farmacia-del-puente.png"
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
                              src="multimedia/osdepym.png"
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
                              src="multimedia/farmacia-del-puente.png"
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
  const posteos = extractSliceData(data, "posteos");

  return {
    paths: posteos.map(({ titulo1 }) => ({
      params: {
        name: RichText.asText(titulo1).toLowerCase().replace(/\s/g, "-"),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params = {} }) => {
  const { name } = params;
  const page = await Client().getSingle("blog");
  const { data } = page;
  const allPosts = extractSliceData(data, "posteos");
  const post = allPosts.find(
    (post) =>
      RichText.asText(post.titulo1).toLowerCase().replace(/\s/g, "-") === name
  );

  return {
    props: {
      post,
    },
    revalidate: 30,
  };
};

export default Page;
