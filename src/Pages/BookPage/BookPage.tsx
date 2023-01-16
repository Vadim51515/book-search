import { useParams } from "react-router-dom";
import { useDispatch } from "redux/store";
import { useSelector } from "./../../redux/store";
import { getBook } from "../../redux/bookReducer";
import { useEffect } from "react";
import Layout from "components/Layout/Layout";
import GoBack from "components/GoBack/GoBack";
import styles from "./BookPage.module.scss";
import LazyLoadingImg from "components/LazyLoadingImg/LazyLoadingImg";
import BookCategories from "components/BookCategories/BookCategories";
import BookAuthors from "components/BookAuthors/BookAuthors";
import Hr from "ui/Hr/Hr";

const BookPage = () => {
  const dispatch = useDispatch();
  const { id: bookId } = useParams();

  const book = useSelector((store) => store.bookReducer.book);
  // console.log("bookId", bookId);
  useEffect(() => {
    dispatch(getBook(bookId ?? ""));
  }, []);
  console.log("book", book);

  return (
    <Layout>
      <GoBack
        propsClassName={styles.goBackContainer}
        text={"Вернуться к поиску"}
      />
      <div className={styles.contentContainer}>
        <div className={styles.imgContainer}>
          <LazyLoadingImg
            thumbnail={book?.volumeInfo.imageLinks.thumbnail}
            smallThumbnail={book?.volumeInfo.imageLinks.smallThumbnail}
          />
        </div>

        <div className={styles.infoContainer}>
          <BookCategories categories={book?.volumeInfo.categories} />
          <h1 className={styles.titleBook}>{book?.volumeInfo.title}</h1>
          <BookAuthors authors={book?.volumeInfo.authors}/>
          <Hr propsClassName={styles.hr}/>
          <h2 className={styles.descriptionTitle}>Описание</h2>
          <h4 className={styles.descriptionText}>{book?.volumeInfo.description}</h4>
        </div>
      </div>
    </Layout>
  );
};

export default BookPage;
