import { useSelector } from "redux/store";

const BookCards = () => {
  const books = useSelector((store) => store.bookReducer.books);

  console.log('books',books);
  

  return (
    <div>
      {books.map((e) => (
        <p>{e.volumeInfo.title}</p>
      ))}
    </div>
  );
};

export default BookCards;
