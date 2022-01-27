import { useState } from "react";

const AddBook = ({ user, setUser }) => {
  const [bookTitle, setBookTitle] = useState();

  const handleTitleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const submitBook = async (e) => {
    e.preventDefault();
    const payload = { title: bookTitle };
    console.log(user.id, "!!!!!!!!!");
    const res = await fetch(`http://localhost/sub/17`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    const data = await res.json();
    console.log(data);
  };
  //   if (user) {
  //     try {
  //       submitBook(event);
  //     } catch (error) {
  //       console.log("no user");
  //     }
  //     console.log("submitted");
  //   }

  return (
    <>
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
    </>
  );
};

export default AddBook;
