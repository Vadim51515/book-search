import Select from "ui/Select/Select";
import styles from "./BookFilter.module.scss";
import { bookCategoriesData, sortByData } from "./../../utils/data";
import {
  changeCategoryOption,
  changeSortByOption,
  changeTitleBook as changeTitleBookRedux,
  getBooks,
} from "./../../redux/bookReducer";
import Input from "ui/Input/Input";
import { useDispatch, useSelector } from "redux/store";
import Button from "ui/Button/Button";
import { useEffect } from "react";
const BookFilter = () => {
  const dispatch = useDispatch();

  const categoryOption = useSelector(
    (store) => store.bookReducer.categoryOption
  );
  const sortByOption = useSelector((store) => store.bookReducer.sortByOption);
  const titleBook = useSelector((store) => store.bookReducer.titleBook);

  const changeCategory = (categoryOption: SelectOptionType) => {
    dispatch(changeCategoryOption(categoryOption));
  };

  const changeSortBy = (sortByOption: SelectOptionType) => {
    dispatch(changeSortByOption(sortByOption));
  };

  const changeTitleBook = (titleBook: string) => {
    dispatch(changeTitleBookRedux(titleBook));
  };

  return (
    <div className={styles.container}>
      <Input
        onChange={changeTitleBook}
        onEnter={() => dispatch(getBooks())}
        value={titleBook}
        title={"Название книги"}
      />
      <Select
        options={bookCategoriesData}
        onChange={changeCategory}
        title={"Категория"}
        selectedOption={categoryOption}
      />
      <Select
        options={sortByData}
        onChange={changeSortBy}
        title={"Сортировать по:"}
        selectedOption={sortByOption}
      />
      <Button onClick={() => dispatch(getBooks())} type={"primary"}>
        Найти книги
      </Button>
    </div>
  );
};

export default BookFilter;
