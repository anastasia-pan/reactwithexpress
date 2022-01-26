import { useState, useEffect } from "react";

const Booklist = ({ user, setUser }) => {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //http://localhost/user/:id
      const res = await fetch(`http://localhost/user/${user.id}/sub`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setMyList(data);
    };
    if (user) {
      try {
        fetchData();
      } catch (error) {
        console.log("no user");
      }
    }
  }, [user]);

  return (
    <>
      <h2>{user ? user.name : "not here"}</h2>
      {user ? (
        <ul>
          {myList.map((book) => (
            <li key={book.id}>{book.book_title}</li>
          ))}{" "}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default Booklist;
