export default async function getOneMovie(id: string | undefined) {
  if (id === undefined) return;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=59e7cca35fc30cfd03755199ea4b5ea2&language=en-US`
  );

  if (!res.ok) return false;

  const data = await res.json();

  return data;
}
