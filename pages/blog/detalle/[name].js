import { RichText, Date as PDate } from "prismic-reactjs";
import { useRouter } from "next/router";
import { Client } from "../../../prismic";
import { Footer } from "../../../src/Footer";
import { extractSliceData } from "../../../src/utils";
import { Anuncios } from "../../../src/Anuncios";

const Page = ({ post, anuncios }) => {
  const router = useRouter();
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
            <a onClick={router.back}>
              <input
                className="articulos__boton--volver"
                type="button"
                value="Volver a página anterior"
              />
            </a>
          </center>
        </div>

        <Anuncios anuncios={anuncios} />
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
  const anunciosPage = await Client().getSingle("anuncios");
  const anuncios = extractSliceData(anunciosPage.data, "anuncios");
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
      anuncios,
    },
    revalidate: 30,
  };
};

export default Page;
