## Rotten Tomato OMDB App

App built for NYCDA Web Developer Intensive class.

## Specs

- [Homepage should have:
    - [At least 3 featured movies
    - [A search bar that you could use to fetch movies from OMDB as user types
- [Movie Detailed page should have:
    - [Rating
    - [Title
    - [Year
    - [any other relevant data that you get from OMDB
    - [Comments to the movie submitted by users
    - [Form to submit a comment to the movie
    - [Authentication is optional

## Technologies

- [React
- [OMDB API
- [Optional Redux / Thunk
- [git and github
- [PosgreSQL database

## Database
```
Table Comments:

    id
    body
    user
    movieId (comes from OMDB data -- imdbID)
    timestaps

```
