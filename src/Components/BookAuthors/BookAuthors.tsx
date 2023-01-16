import styles from "./BookAuthors.module.scss"
type PropsType = {
  authors?:Array<string>
}
const BookAuthors = ({authors}:PropsType) => {
  return (
    <div>
      <p className={styles.authors}>{authors?.join(', ')}</p>
    </div>
  );
}

export default BookAuthors