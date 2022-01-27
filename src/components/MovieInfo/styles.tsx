import styled from "styled-components";

export const MovieInfoWrapper = styled.div`
  height: 100vh;
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr;
  place-content: center;
`;

export const MovieImage = styled.img`
  width: 300px;
  height: auto;
  max-height: 500px;
  object-fit: cover;
`;

export const MovieTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const MovieGenereWrapper = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`;

export const MovieGenere = styled.span`
  padding: 5px 10px;
  background-color: #373a3d;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: border 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    border: 1px solid #fff;
  }
`;
