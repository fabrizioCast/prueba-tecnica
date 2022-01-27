import styled from "styled-components";

export const CardWrapper = styled.div`
  all: unset;
  display: flex;
  flex-direction: column;
  background-color: #1b1c1d;
  height: 100%;
  border-radius: 5px;
  border: 1px solid transparent;
  color: #fff;
  text-decoration: none;
  transition: border 0.3s ease-in-out;

  &:hover {
    border: 1px solid #fff;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
`;

export const CardInfo = styled.div`
  padding: 10px;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const CardOverview = styled.p`
  font-size: 1.2rem;
  font-weight: normal;
`;
