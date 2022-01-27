import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color: #fff;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InfoName = styled.p`
  font-size: 1.5em;
`;

export const RepositoryLink = styled.a`
  text-decoration: none;
  color: #fff;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const LinkStyled = styled(Link)`
  background-color: #007aff;
  padding: 10px 25px;
  border-radius: 5px;
  color: #fff;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: #0059b3;
  }
`;
