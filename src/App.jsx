import { useEffect, useState } from "react";
import Login from "./components/login/Login";
import MainHeader from "./components/main-header/MainHeader";
import Home from "./components/home/Home";

// как сделать что бы при перезагрузке страницы пользлвателя остовался в Странице (Wellcome Page ) а не в Logine ?
// как при перезагрузке isloggede сделать true
function App() {
  const [userName, setUserName] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

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
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => {
        return data.json();
      })
      .then((users) => {
        setUsers(users);
      });
  }, []);

  return (
    <>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {<MainHeader isLoggedIn={isLoggedIn} />}
        {isLoggedIn && <Home />}

        <section>
          <h2>Users</h2>
          {users.map((user) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <code>{user.phone}</code>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
