import BookCardsLayout from "components/BookCardsLayout/BookCardsLayout";
import BookFilter from "components/BookFilter/BookFilter";
import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";
import Hr from "ui/Hr/Hr";
import styles from "./Home.module.scss";
const Home = () => {

  return (
    <>
      <Header />
      <Layout>
        <h1 className={styles.title}>Быстрый поиск книг</h1>
        <BookFilter />
        <Hr />
        <BookCardsLayout />
      </Layout>
    </>
  );
};

export default Home;
