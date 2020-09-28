import { RichText } from "prismic-reactjs";
import NextLink from "next/link";
import { encodeBlog } from "./utils";

export const BlogCard = (blog) => {
  const { titulo1, imagen, descripcion } = blog.blog;
  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-body">
        <NextLink href={`blog/detalle/${encodeBlog(titulo1)}`}>
          <a>
            <img src={imagen.url} width="250" height="200" />
          </a>
        </NextLink>
        <h4 className="card-body--titulo">{RichText.asText(titulo1)}</h4>
        <p className="card-body--texto">
          {RichText.asText(descripcion).length > 380
            ? `${RichText.asText(descripcion).substr(0, 380)}...`
            : RichText.asText(descripcion)}
        </p>
        <NextLink href={`blog/detalle/${encodeBlog(titulo1)}`}>
          <a>
            <button
              type="button"
              id="boton-leer-mas"
              className="btn btn-danger"
              data-dismiss="modal"
            >
              Leer mas
            </button>
          </a>
        </NextLink>
      </div>
    </div>
  );
};
