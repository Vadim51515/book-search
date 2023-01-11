import axios from 'axios';

axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/volumes';

export const getBooks = () => {
  axios.get(`?q=${'1'}&terms&subject=123213&maxResults=30`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}
