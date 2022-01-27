import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import useGetMovies from "../../hooks/useGetMovies";
import MovieCard from "../MovieCard";
import { MoviesWrapper } from "./styled";

interface IMovieData {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
}

export default function MovieApp() {
  const { user } = useContext(UserContext);
  const history = useNavigate();
  const { movies } = useGetMovies();

  useEffect(() => {
    if (!user.isAuthenticated) {
      history("/login");
    }
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div>
      <h1>Top rated</h1>
      <MoviesWrapper>
        {movies.map((movie: IMovieData) => (
          <Link
            to={`/films/${movie.id}`}
            style={{ textDecoration: "none" }}
            key={movie.id}
          >
            <MovieCard
              title={movie.title}
              overview={movie.overview}
              img={movie.backdrop_path}
            />
          </Link>
        ))}
      </MoviesWrapper>
    </div>
  );
}
