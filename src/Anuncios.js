import { Link } from "prismic-reactjs";

export const Anuncios = ({ anuncios }) => {
  const anunciosSections = Array(Math.ceil(anuncios.length / 3)).fill(1);
  if (!anunciosSections.length) {
    anunciosSections.push(1);
  }
  return (
    <div className="container text-center my-3">
      <div className="row mx-auto my-auto">
        <div
          id="myCarousel"
          className="carousel slide w-100"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            {anunciosSections.map((_, offset) => (
              <div key={`${offset}`} className="carousel-item py-5 active">
                <div className="row">
                  {anuncios
                    .slice(offset * 3, offset * 3 + 3)
                    .map(({ imagen, link }, idx) => (
                      <div key={`${idx}`} className="col-sm-6">
                        <div className="card">
                          <div className="card-body">
                            <a href={Link.url(link)}>
                              <img
                                src={imagen.url}
                                width="200"
                                height="70"
                                alt="logo-osdepym"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
            <ol className="carousel-indicators">
              {anunciosSections.map((_, idx) => (
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
