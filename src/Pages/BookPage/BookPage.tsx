import { useDispatch } from "redux/store";

// import { useParams } from "react-router-dom";
import {
  getBook as getBookRedux,
} from "../../redux/bookReducer";

const BookPage = () => {
  const dispatch = useDispatch();
  // const { id: bookId } = useParams();
  // console.log("bookId", bookId);
  dispatch(getBookRedux('bookId' ?? ""));

  return <p>123</p>;
};

export default BookPage;
