import { useState } from "react";

const AddBook = ({ user, setUser, myList, setMyList }) => {
  const [bookTitle, setBookTitle] = useState("");
  //sets title by monitoring submit//
  const handleTitleChange = (e) => {
    setBookTitle(e.target.value);
  };
  //=================================add Book to profile function ================================================//
  const submitBook = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({ title: bookTitle });
    console.log(user.id, "!!!!!!!!!");
    const res = await fetch(`http://localhost/sub/${user.id}`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    const data = await res.json();
    console.log(data);
    setMyList(data);
  };

  return (
    <>
      {" "}
      {user ? (
        <form onSubmit={submitBook}>
          <h2>Add Book</h2>
          <label htmlFor="book">Book:</label>
          <input
            type="text"
            name="bookTitle"
            value={bookTitle}
            onChange={handleTitleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default AddBook;
