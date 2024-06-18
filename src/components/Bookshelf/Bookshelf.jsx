import { useState } from "react";

const initialBooksState = [
  { title: "Fourth Wing", author: "Rebecca Yarros" },
  { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
];

const initialNewBookState = {
  title: "",
  author: "",
};

const Bookshelf = () => {
  const [books, setBooks] = useState(initialBooksState);
  const [newBook, setNewBook] = useState(initialNewBookState);
  const handleInputChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      console.log(" added the new book ", newBook);
      setNewBook(initialNewBookState);
    } else {
      alert("Please fill out all inputs");
    }
  };
  return (
    <>
      <div className="bookshelfDiv">
        <div className="formDiv">
          <h3>Add a Book</h3>
          <BookForm
            newBook={newBook}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="bookCardsDiv">
          {books.map((book, idx) => {
            return (
              <div key={book.title + idx} className="bookCard">
                <div className="text-container">
                  <p>
                    <span>Title:</span>
                    {book.title}
                  </p>
                  <p>
                    <span>Author:</span>
                    {book.author}
                  </p>
                </div>
              </div>
            );
          })}
        </div>{" "}
      </div>
    </>
  );
};
export default Bookshelf;

export const BookForm = ({ newBook, handleInputChange, handleSubmit }) => {
  return (
    <form>
      <label htmlFor="">Title</label>
      <input
        onChange={(e) => handleInputChange(e)}
        id="title"
        name="title"
        type="text"
        value={newBook.title}
      />
      <label htmlFor="">Author</label>
      <input
        onChange={(e) => handleInputChange(e)}
        id="author"
        name="author"
        type="text"
        value={newBook.author}
      />
      <button onClick={(e) => handleSubmit(e)} type="submit">
        Add new book
      </button>
    </form>
  );
};
