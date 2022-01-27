import { State, useState } from "react";

const AddBook = (user, setUser) => {
  const [bookTitle, setBookTitle] = useState("");

  const handleTitleChange = (e) => {
    setBookTitle(e.target.value);
  };

  const submitBook = () => {};

  return (
    <>
      <form onSubmit="submitBook"></form>
      <h2>Add Book</h2>
      <label htmlFor="book">Book:</label>
      <input
        type="text"
        name="bookTitle"
        value={bookTitle}
        onChange={handleTitleChange}
      />
      <input type="submit" value="Submit" />
    </>
  );
};

export default AddBook;
