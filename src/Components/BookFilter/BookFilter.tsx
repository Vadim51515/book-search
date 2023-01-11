import Select from "Components/Select/Select"
import styles from "./BookFilter.module.scss"
const BookFilter =() => {

  return(
    <div className={styles.container}>
      <Select />
      <Select />
      <Select />
    </div>
  )
}

export default BookFilter