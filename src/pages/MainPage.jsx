import React from "react";
import Footer from "../components/global/Footer";
import Header from "../components/global/Header";
import { useEffect, useState } from "react";

function Container() {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://shift-intensive.ru/api/cinema/films")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success && data.films && data.films.length > 0) {
          setFilm(data.films[0]);
        } else {
          throw new Error("No films data available");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!film) return <div>Нет данных о фильме</div>;

  const actorsList = film.actors
    ? film.actors.map((actor) => actor.fullName).join(", ")
    : "Актеры не указаны";

  return (
    <>
      <Header />
      <div className="container">
        <img src={film.posterUrl || "placeholder.jpg"} alt={film.name} />
        <div className="title">
          <div className="nameMovie">
            {film.name} ({film.originalName})
          </div>
          <div className="releaseDate">{film.releaseDate}</div>
          <div className="description">{film.description}</div>
          <div className="actors">Актеры: {actorsList}</div>
        </div>
        <button>Подробнее</button>
      </div>
      <Footer />
    </>
  );
}

export default Container;
