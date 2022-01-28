import { useState, useEffect } from "react";
import Booklist from "./Booklist";

const Profile = ({ user, setUser, myList, setMyList }) => {
  const [passwordHash, setPasswordHash] = useState("initialPassword");

  useEffect(() => {
    const fetchData = async () => {
      //http://localhost/user/:id
      const res = await fetch(`http://localhost/user/${user.id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setPasswordHash(data.msg.passwordHash);
    };
    if (user) {
      try {
        fetchData();
      } catch (error) {
        console.log(error, "didn't fetch data");
      }
    }
  }, [user]);

  return (
    <>
      <h2>{user ? `Welcome ${user.username}` : "Please log in"}</h2>
      <h2>{user ? "" : "Not logged in"} </h2>
      <Booklist
        user={user}
        setUser={setUser}
        myList={myList}
        setMyList={setMyList}
      />
    </>
  );
};

export default Profile;
