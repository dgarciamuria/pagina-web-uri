import { RichText, Link } from "prismic-reactjs";

export const VideoCard = (video) => {
  const { titulo, link } = video.video;
  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-body">
        <iframe
          className="card-body-videos--video"
          height="140"
          src={Link.url(link)}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h4 className="card-body-videos--titulo">{RichText.asText(titulo)}</h4>
        <a href={Link.url(link)} target="_blank">
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
    </div>
  );
};
