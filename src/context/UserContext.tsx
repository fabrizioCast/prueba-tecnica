import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  email: string;
  password: string;
  isAuthenticated?: boolean;
}

interface IUserContext {
  user: IUser;
  handleUser: (user: IUser) => void;
}

const defaultState: IUserContext = {
  user: {
    email: "",
    password: "",
    isAuthenticated: false,
  },
  handleUser: () => {},
};

const UserContext = createContext<IUserContext>(defaultState);

const initialUser: IUser = {
  email: "",
  password: "",
  isAuthenticated: false,
};

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleUser = (userForm: IUser) => {
    if (userForm.email === "test" && userForm.password === "test") {
      setUser({
        ...userForm,
        isAuthenticated: true,
      });
      navigate("/films");
      return true;
    }
    alert("Usuario o contraseña incorrectos");
  };

  let data = { user, handleUser };

  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default UserContext;
export { UserProvider };
