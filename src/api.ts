import axios from "axios";

axios.defaults.baseURL = "https://www.googleapis.com/books/v1/volumes";

export const getBooks = ({
  titleBook,
  orderBy,
  startIndex,
  subject,
}: GetBooksParams) => {
  return axios
    .get(
      `?q=${titleBook}&subject=${subject}&maxResults=${30}&startIndex=${startIndex}&orderBy=${orderBy}`
    )
    .then(function (response: { data: BooksType }) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    })


};

export const getBook = ({ id }: { id: string }) => {
  return axios
    .get(`/${id}`)
    .then(function (response: { data: BookType }) {
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
