import axios from 'axios';

axios.defaults.baseURL = 'https://www.googleapis.com/books/v1/volumes';

export const getBooks = () => {
  axios.get('?q=search+terms')
  .then(function (response) {
    // handle success
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
