import { RichText, Link } from "prismic-reactjs";

export const Novedades = ({ publicidad }) => {
  const publicidadSections = Array(publicidad.length / 3).fill(1);
  return (
    <div className="container text-center my-3">
      <div className="row mx-auto my-auto">
        <div
          id="myCarousel"
          className="carousel slide w-100"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            {publicidadSections.map((_, offset) => {
              return (
                <div
                  key={`${offset}`}
                  className={`carousel-item py-5 ${
                    offset === 0 ? "active" : ""
                  }`}
                >
                  <div className="row">
                    {publicidad
                      .slice(offset * 3, offset * 3 + 3)
                      .map(({ imagen, titulo, descripcion, link }, idx) => {
                        let cardId = undefined;
                        if (idx === 0) {
                          cardId = "card-1";
                        } else if (idx === 1) {
                          cardId = "card-2";
                        } else if (idx === 2) {
                          cardId = "card-3";
                        }
                        const card = (
                          <div
                            key={`${offset}-${idx}`}
                            id={cardId}
                            className="col-sm-4"
                          >
                            <div className="card">
                              <div className="card-body">
                                <a href={Link.url(link)}>
                                  <img
                                    src={imagen.url}
                                    width="250"
                                    height="200"
                                  />
                                </a>
                                <h4 className="card-body--titulo">
                                  {RichText.asText(titulo)}
                                </h4>
                                <p className="card-body--texto">
                                  {RichText.asText(descripcion)}
                                </p>
                                {Link.url(link) ? (
                                  <a href={Link.url(link)} target="_blank">
                                    <button
                                      type="button"
                                      id="boton-leer-mas"
                                      className="btn btn-danger"
                                      data-dismiss="modal"
                                    >
                                      Leer mas
                                    </button>
                                  </a>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        );
                        return card;
                      })}
                  </div>
                </div>
              );
            })}

            <ol className="carousel-indicators">
              {publicidadSections.map((_, idx) => (
                <li
                  key={`${idx}`}
                  data-target="#myCarousel"
                  data-slide-to={`${idx}`}
                  className={idx === 0 ? "active" : ""}
                ></li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
