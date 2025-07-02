# Ожидаемый результат: создана страница/экран афиши и страница/экран конкретного фильма. Реализован показ расписания и флоу оплаты билетов

1. Реализована страница/экран афиша с списком фильмов, список фильмов получен с помощью запроса **get** [/cinema/today](https://shift-intensive.ru/api/rest#/%F0%9F%8D%BF%20cinema/CinemaController_getCinemaToday)

2. Реализована страница/экран конкретного фильма, фильм получен с помощью запроса **get** [/cinema/film/:filmId](https://shift-intensive.ru/api/rest#/%F0%9F%8D%BF%20cinema/CinemaController_getFilm)

3. Реализовано отображение расписания на 7 дней с помощью запроса **get** [/cinema/film/:filmId/schedule](https://shift-intensive.ru/api/rest#/%F0%9F%8D%BF%20cinema/CinemaController_getFilmSchedule)

4. Реализован выбор места с помощью селектов

5. Реализована форма заполнения данных для оплаты
