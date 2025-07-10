import React from "react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import { useEffect, useState } from "react";

function Container() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch("https://shift-intensive.ru/api/cinema/films")
      .then((response) => {
        if (!response.ok) throw new Error("Connection Error");
        return response.json();
      })
      .then((data) => {
        if (!isMounted) return;
        if (data.success && data.films?.length > 0) {
          setFilms(data.films);
        } else {
          throw new Error("There is no information about the movie");
        }
        setLoading(false);
      })
      .catch((error) => {
        if (!isMounted) return;
        setError(error.message);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error:{error} </div>;
  if (!films) return <div>Data about films unknown</div>;

  return (
    <>
      <Header />
      <div className="container">
        {films.map((film) => {
          const imageUrl = `https://shift-intensive.ru/api/${film.img}`;
          return (
            <div key={film.id} className="film-item">
              <div className="imposition">
                <img
                  src={imageUrl}
                  width=" 328px"
                  height="300px"
                  alt={film.name}
                  onError={(e) => {
                    e.target.onerror = null;
                  }}
                />
                <div className="genres">
                  {film.genres.map((genre, index) => (
                    <span key={index} className="genre-item">
                      {genre}
                      {index < film.genres.length - 1 ? ", " : " "}
                    </span>
                  ))}
                  <div className="realizeDate">
                    {film.country.name}, ({film.releaseDate})
                  </div>
                </div>
              </div>
              <div className="title">
                <h3 className="nameMovie">
                  {film.name} ({film.ageRating})
                </h3>
                <div className="runtime">
                  Продолжительность: {film.runtime} сек.
                </div>
                <div className="rating">
                  Кинопоиск: {film.userRatings?.kinopoisk || "N/A"}, IMDB:{" "}
                  {film.userRatings?.imdb || "N/A"}
                </div>
              </div>
              <button>Подробнее</button>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Container;
