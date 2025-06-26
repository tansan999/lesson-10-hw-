import MainHeader from "./components/main-header/MainHeader";
import Login from "./components/login/Login";
import { useEffect, useState } from "react";
import Home from "./components/home/Home";
import User from "./components/user/User";
import RickyAndMortyCard from "./components/_rickyandmorty_card/RickyAndMortyCard";

// как сделать что бы при перезагрузке страницы пользлвателя остовался в Странице (Wellcome Page ) а не в Logine ?
// как при перезагрузке isloggede сделать true
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState({});
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState();

  const loginHandler = (email, password) => {
    setUserName({ email: email, password: password });
    setIsLoggedIn(true);
    localStorage.setItem("USER", "HAHA");
  };
  const isAuth = localStorage.getItem("USER");
  console.log(isAuth);

  useEffect(() => {
    if (isAuth) {
      setIsLoggedIn(true);
    }
  }, []);

  // useEffect callback функцияны компронента торолгондо бир гана иштетет
  // Mounthing = [] = бир жолу callback функция иштейт

  const navigateToUser = (e, param) => {
    e.preventDefault();
    setPage(param);
    console.log(param);
  };

  return (
    <>
      <MainHeader navigateToUser={navigateToUser} isLoggedIn={isLoggedIn} />

      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && page === "users" && <User />}
        {isLoggedIn && page === "_RICKY AND MORTY_" && <Ric kyAndMortyCard />}
      </main>
    </>
  );
}

export default App;
