import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MovieDetails,
  MovieGenere,
  MovieGenereWrapper,
  MovieImage,
  MovieInfoWrapper,
  MovieTitle,
} from "./styles";
import getOneMovie from "../../utils/getOneMovie";

interface IMovieData {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  genres: [
    {
      id: number;
      name: string;
    }
  ];
}

export default function MovieInfo() {
  const [movie, setMovie] = useState<IMovieData>();
  let params = useParams();

  useEffect(() => {
    getOneMovie(params.slug).then((movie) => {
      setMovie(movie);
    });
  }, []);

  return (
    <MovieInfoWrapper>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w300/${movie?.poster_path}`}
      />
      <MovieDetails>
        <MovieTitle>{movie?.title}</MovieTitle>
        <MovieGenereWrapper>
          {movie?.genres.map((genre) => (
            <MovieGenere key={genre.id}>{genre.name}</MovieGenere>
          ))}
        </MovieGenereWrapper>
        <p>{movie?.overview}</p>
      </MovieDetails>
    </MovieInfoWrapper>
  );
}
