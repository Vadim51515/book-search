import BookCard from "components/BookCard/BookCard";
import { useSelector } from "redux/store";
import styles from "./BookCardsLayout.module.scss";
import classNames from "classnames";

type PropsType = {
  propsClassName?: string;
};
const BookCardsLayout = ({ propsClassName }: PropsType) => {
  const books = useSelector((store) => store.bookReducer.books);

  return (
    <div className={classNames(styles.container, propsClassName)}>
      {books.map((b, i) => (
        <BookCard book={b} key={i} />
      ))}
    </div>
  );
};

export default BookCardsLayout;
