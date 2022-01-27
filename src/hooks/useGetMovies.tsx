import { useEffect, useState } from "react";

export default function useGetMovies() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=59e7cca35fc30cfd03755199ea4b5ea2`
      );
      if (!res.ok) {
        let error;
        error = new Error(res.statusText);
        throw error;
      }

      const data = await res.json();
      setMovies(data.results);
    } catch (error) {}
  };

  useEffect(() => {
    getMovies();
  }, []);

  return { movies };
}
