import styled from "styled-components";

export const FormWrapper = styled.form`
  background-color: #22272e;
  padding: 20px;
  border-radius: 5px;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding: 0 15px;
  font-size: 1em;
  color: #fff;
  background-color: #2d333b;
  margin-bottom: 10px;
  border: 1px solid transparent;

  &:focus {
    border: 1px solid #fff;
    outline: none;
  }
`;

export const Submit = styled.button`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  padding: 0 15px;
  font-size: 1em;
  color: #fff;
  background-color: #2d333b;
  margin-bottom: 10px;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
