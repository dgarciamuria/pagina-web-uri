import { RichText, Link } from "prismic-reactjs";
import NextLink from "next/link";
import { BlogCard } from "./BlogCard";
import { VideoCard } from "./VideoCard";

export const Novedades = ({ blogs = [], videos = [] }) => {
  const blogEntries = blogs.map((blog) => ({ ...blog, type: "blog" }));
  const videoEntries = videos.map((video) => ({ ...video, type: "video" }));
  const combined = [...blogEntries, ...videoEntries];
  const newsSections = Array(Math.ceil(combined.length / 3)).fill(1);
  return (
    <div className="container text-center my-3">
      <div className="row mx-auto my-auto">
        <div
          id="myCarousel"
          className="carousel slide w-100"
          data-ride="carousel"
        >
          <div className="carousel-inner" role="listbox">
            {newsSections.map((_, offset) => {
              return (
                <div
                  key={`${offset}`}
                  className={`carousel-item py-5 ${
                    offset === 0 ? "active" : ""
                  }`}
                >
                  <div className="row">
                    {combined
                      .slice(offset * 3, offset * 3 + 3)
                      .map((element, idx) => {
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
                            {element.type === "blog" ? (
                              <BlogCard blog={element} />
                            ) : (
                              <VideoCard video={element} />
                            )}
                          </div>
                        );
                        return card;
                      })}
                  </div>
                </div>
              );
            })}

            <ol className="carousel-indicators">
              {newsSections.map((_, idx) => (
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
