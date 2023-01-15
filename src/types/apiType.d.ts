type BooksType = {
  items: Array<BookType>;
  totalItems: number;
};

type BookType = {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    categories?: Array<string>;
    authors?: Array<string>;
  };
};

type GetBooksParams = {
  titleBook: string;
  subject: string;
  startIndex: string;
  orderBy: string;
};

type SelectOptionType = { value: string; label: string };
