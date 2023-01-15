import BookCard from "components/BookCard/BookCard";
import { useSelector } from "redux/store";
import styles from "./BookCardsLayout.module.scss";
const BookCardsLayout = () => {
  const books = useSelector((store) => store.bookReducer.books);

  console.log("books", books);

  return (
    <div className={styles.container}>
      {books.map((b, i) => (
        <BookCard book={b} key={i} />
      ))}
    </div>
  );
};

export default BookCardsLayout;
