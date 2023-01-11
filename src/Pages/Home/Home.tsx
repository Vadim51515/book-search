import { getBooks } from "api";
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
      </Layout>
    </>
  );
};

export default Home;
