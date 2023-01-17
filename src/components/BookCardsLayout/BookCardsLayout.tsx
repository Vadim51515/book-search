import BookCard from "components/BookCard/BookCard";
import { useDispatch, useSelector } from "redux/store";
import styles from "./BookCardsLayout.module.scss";
import classNames from "classnames";
import Loading from "components/Loading/Loading";
import Button from "ui/Button/Button";
import { showMore } from "redux/bookReducer";

type PropsType = {
  propsClassName?: string;
};
const BookCardsLayout = ({ propsClassName }: PropsType) => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.bookReducer.books);
  const isLoading = useSelector((store) => store.bookReducer.isLoadingHomePage);
  if (isLoading) return <Loading />;
  return (
    <>
      <div className={classNames(styles.container, propsClassName)}>
        {books.map((b, i) => (
          <BookCard book={b} key={i} />
        ))}
      </div>
      {books && books.length > 1 && (
        <Button
          onClick={() => {
            dispatch(showMore());
          }}
        >
          Показать ещё
        </Button>
      )}
    </>
  );
};

export default BookCardsLayout;
