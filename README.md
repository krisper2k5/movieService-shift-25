# Ожидаемый результат: создана страница/экран афиши и страница/экран конкретного фильма. Реализован показ расписания и флоу оплаты билетов

1. Реализована страница/экран афиша с списком фильмов, список фильмов получен с помощью запроса **get** [/cinema/today](https://shift-intensive.ru/api/rest#/%F0%9F%8D%BF%20cinema/CinemaController_getCinemaToday)

2. Реализована страница/экран конкретного фильма, фильм получен с помощью запроса **get** [/cinema/film/:filmId](https://shift-intensive.ru/api/rest#/%F0%9F%8D%BF%20cinema/CinemaController_getFilm)

3. Реализовано отображение расписания на 7 дней с помощью запроса **get** [/cinema/film/:filmId/schedule](https://shift-intensive.ru/api/rest#/%F0%9F%8D%BF%20cinema/CinemaController_getFilmSchedule)

4. Реализован выбор места с помощью селектов

5. Реализована форма заполнения данных для оплаты

# Результат:

1. Реализована страница/экран афиша с списком фильмов, список фильмов получен с помощью запроса **get** [/cinema/today](https://shift-intensive.ru/api/rest#/%F0%9F%8D%BF%20cinema/CinemaController_getCinemaToday)

# Полезные ссылки:

1. Api : https://shift-intensive.ru/api/cinema/films
2. UI KIT : https://www.figma.com/design/KsxWtBbM0Ni8e5c9aFBa8I/UI-Kit-ШИФТ-интенсив?node-id=9-206&t=SrXbThNJfrUu5rqM-0
3. Makets : https://www.figma.com/design/HbwUMBOWcrPBkPTmRPYwor/Задания-ШИФТ-Интенсив?node-id=4177-5475&p=f&t=KgD4NGUktUmPeqFc-0
4. Api rest tag : https://shift-intensive.ru/api/rest#tag/-cinema
5. Notion : https://omniscient-honeydew-f15.notion.site/215ec51a3b88818b9d50d30ca870d5e0
