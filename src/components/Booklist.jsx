import { useState, useEffect } from "react";

const Booklist = ({ user, setUser, myList, setMyList }) => {
  const deleteItem = async (userid, bookid) => {
    console.log(userid);
    console.log(bookid);
    //http://localhost/user/:id
    if (user) {
      try {
        const res = await fetch(`http://localhost/sub/${userid}/${bookid}`, {
          method: "DELETE",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log(data);
        setMyList(data);
        console.log(myList);
      } catch (error) {
        console.log("delete didn't work", error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      //http://localhost/user/:id
      const res = await fetch(`http://localhost/sub/${user.id}`, {
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
      <div className="listContainer">
        {user ? (
          <ul className="list">
            {myList.map((book, index) => (
              <BookItem
                title={book.book_title}
                author={book.book_author}
                key={index}
                bookId={book.book_id}
                delete={deleteItem}
                user={user}
              />
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

const BookItem = (props) => {
  return (
    <div className="bookBox">
      <li className="book" key={props.bookId}>
        <div className="title">{props.title}</div>
        <div className="author">{props.author}</div>
      </li>
      <input
        type="submit"
        value="delete"
        onClick={(e) => {
          console.log("apple");
          e.preventDefault();
          props.delete(props.user.id, props.bookId);
          console.log("carrot");
        }}
      />
    </div>
  );
};

export default Booklist;
