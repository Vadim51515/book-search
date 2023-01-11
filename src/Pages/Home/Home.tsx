import { getBooks } from "api";
import BookFilter from "Components/BookFilter/BookFilter";
import Header from "Components/Header/Header";
import Layout from "Components/Layout/Layout";
import styles from "./Home.module.scss"
const Home = () => {
  getBooks()
  return (
    <>
      <Header />
      <Layout>
        <h1 className={styles.title}>Быстрый поиск книг</h1>
        <BookFilter />
      </Layout>
    </>
  );
};

export default Home;
