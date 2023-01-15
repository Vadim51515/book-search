import styles from './BookCategory.module.scss'
type PropsType = {
  category: string;
  isLowerCase?: boolean;
};

const BookCategory = ({ category, isLowerCase }: PropsType) => {
  return <h5 className={styles.category}>#{isLowerCase ? category.toLowerCase() : category}</h5>;
};

export default BookCategory;
