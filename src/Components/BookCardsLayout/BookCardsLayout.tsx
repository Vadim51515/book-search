import BookCard from "components/BookCard/BookCard";
import { useSelector } from "redux/store";
import styles from "./BookCardsLayout.module.scss";
import classNames from "classnames";
import Loading from "components/Loading/Loading";
import Button from "ui/Button/Button";

type PropsType = {
  propsClassName?: string;
};
const BookCardsLayout = ({ propsClassName }: PropsType) => {
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
      <Button onClick={() => {}}>Показать ещё </Button>
    </>
  );
};

export default BookCardsLayout;
