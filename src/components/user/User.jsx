import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <section>
      <h2>Users</h2>
      <div>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
}

export default User;