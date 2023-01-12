import axios from "axios";
import bookReducer from "redux/bookReducer";
import { actions } from "./redux/bookReducer";

axios.defaults.baseURL = "https://www.googleapis.com/books/v1/volumes";

export const getBooks = () => {
  return axios
    .get(
      `?q=${"js"}&terms&subject=computer&maxResults=30&startIndex=10`
    )
    .then(function (response:{ data: BooksType }) {
      console.log("response", response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
};
