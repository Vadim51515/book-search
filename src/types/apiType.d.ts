type BooksType = {
  items: Array<BookType>;
  totalItems: number;
};

type BookType = {
  volumeInfo: {
    title: string;
  };
};
