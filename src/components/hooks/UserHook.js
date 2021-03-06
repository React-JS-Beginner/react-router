import { useEffect, useState } from "react";

const UserHook = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return [users, setUsers];
};

export default UserHook;
