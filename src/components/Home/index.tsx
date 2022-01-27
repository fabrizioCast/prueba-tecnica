import {
  HomeWrapper,
  InfoName,
  InfoWrapper,
  LinkStyled,
  RepositoryLink,
  Title,
} from "./styles";

export default function Home() {
  return (
    <HomeWrapper>
      <Title>Prueba Tecnica</Title>
      <InfoWrapper>
        <InfoName>Fabrizio Alexander Castillo Aiquipa</InfoName>
        <RepositoryLink
          href="https://github.com/fabrizioCast/prueba-tecnica"
          target="_blank"
        >
          Ir al repositorio
        </RepositoryLink>
      </InfoWrapper>
      <LinkStyled to="/login">Ir al login</LinkStyled>
    </HomeWrapper>
  );
}
