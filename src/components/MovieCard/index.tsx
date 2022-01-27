import {
  CardImage,
  CardInfo,
  CardOverview,
  CardTitle,
  CardWrapper,
} from "./styles";

interface IMovieData {
  title: string;
  overview: string;
  img: string;
}

export default function MovieCard({ title, overview, img }: IMovieData) {
  return (
    <CardWrapper>
      <CardImage src={`https://image.tmdb.org/t/p/w500/${img}`} />
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardOverview>{overview}</CardOverview>
      </CardInfo>
    </CardWrapper>
  );
}
