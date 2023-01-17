import BookAuthors from "components/BookAuthors/BookAuthors";
import BookCategories from "components/BookCategories/BookCategories";
import LazyLoadingImg from "components/LazyLoadingImg/LazyLoadingImg";
import { useNavigate } from "react-router-dom";
import styles from "./BookCard.module.scss";
type PropsType = {
  book: BookType;
};

const BookCard = ({ book }: PropsType) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.container}
      onClick={() => {
        navigate(`/book/${book.id}`);
      }}
    >
      <div className={styles.imgContainer}>
        <LazyLoadingImg
          thumbnail={book.volumeInfo.imageLinks?.thumbnail}
          smallThumbnail={book.volumeInfo.imageLinks?.smallThumbnail}
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
