type BooksType = {
  items: Array<BookType>;
  totalItems: number;
};

type BookType = {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks: {
      extraLarge?: string;
      large?: string;
      medium?: string;
      small?: string;
      smallThumbnail?: string;
      thumbnail?: string;
    };
    categories?: Array<string>;
    authors?: Array<string>;
    description?: string;
  };
};

type GetBooksParams = {
  titleBook: string;
  subject: string;
  startIndex: string;
  orderBy: string;
};

type SelectOptionType = { value: string; label: string };
