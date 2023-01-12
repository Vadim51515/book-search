import BookCards from "Components/BookCards/BookCards";
import BookFilter from "Components/BookFilter/BookFilter";
import Header from "Components/Header/Header";
import Layout from "Components/Layout/Layout";
import { useDispatch } from "react-redux/es/exports";
import { getBooks } from "redux/bookReducer";
import styles from "./Home.module.scss"
const Home = () => {
  const dispatch = useDispatch()
  //@ts-ignore
  dispatch(getBooks())
  return (
    <>
      <Header />
      <Layout>
        <h1 className={styles.title}>Быстрый поиск книг</h1>
        <BookFilter />
        <BookCards />
      </Layout>
    </>
  );
};

export default Home;
