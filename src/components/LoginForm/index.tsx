import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { FormWrapper, Input, InputWrapper, Label, Submit } from "./styles";

interface IForm {
  email: string;
  password: string;
}

const initialForm: IForm = {
  email: "test",
  password: "test",
};

export default function LoginForm() {
  const [form, setForm] = useState(initialForm);
  const { handleUser } = useContext(UserContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleUser(form);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <InputWrapper>
        <Label>Correo</Label>
        <Input
          type="text"
          placeholder="Ingresa tu correo"
          defaultValue="test"
          name="email"
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <Label>Contraseña</Label>
        <Input
          type="password"
          placeholder="Ingresa tu contraseña"
          defaultValue="test"
          name="password"
          onChange={handleChange}
        />
      </InputWrapper>
      <Submit type="submit">Ingresar</Submit>
    </FormWrapper>
  );
}
