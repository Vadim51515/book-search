type BooksType = {
  items: Array<BookType>;
  totalItems: number;
};

type BookType = {
  id: string;
  volumeInfo: {
    title: string;
    imageLinks?: ImageLinksType;
    categories?: Array<string>;
    authors?: Array<string>;
    description?: string;
  };
};

type ImageLinksType = {
  extraLarge?: string;
  large?: string;
  medium?: string;
  small?: string;
  smallThumbnail?: string;
  thumbnail?: string;
};

type GetBooksParams = {
  titleBook: string;
  subject: string;
  startIndex: string;
  orderBy: string;
  maxResults: string;
};

type SelectOptionType = { value: string; label: string };
