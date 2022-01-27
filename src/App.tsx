import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import MovieApp from "./components/MovieApp";
import MovieInfo from "./components/MovieInfo";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/films" element={<MovieApp />} />
        <Route path="/films/:slug" element={<MovieInfo />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
