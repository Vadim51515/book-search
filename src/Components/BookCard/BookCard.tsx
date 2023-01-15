import BookAuthors from "components/BookAuthors/BookAuthors";
import BookCategories from "components/BookCategories/BookCategories";
import { useNavigate } from "react-router-dom";
import styles from "./BookCard.module.scss";
type PropsType = {
  book: BookType;
};

const BookCard = ({ book }: PropsType) => {
  const navigate = useNavigate();

  console.log("book", book);

  return (
    <div
      className={styles.container}
      onClick={() => {
        navigate(`/book/${book.id}`);
      }}
    >
      <div className={styles.imgContainer}>
        <img
          className={styles.imgContainer__img}
          src={
            book.volumeInfo.imageLinks?.thumbnail ??
            book.volumeInfo.imageLinks?.smallThumbnail
          }
          alt=""
        />
      </div>
      <div>
        <BookCategories isLowerCase categories={book.volumeInfo.categories} />
        <h4>{book.volumeInfo.title}</h4>
        <BookAuthors authors={book.volumeInfo.authors} />
      </div>
    </div>
  );
};

export default BookCard;
