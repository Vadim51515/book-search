import BookCategory from "components/BookCategories/BookCategory/BookCategory";

type PropsType = {
  categories?: Array<string>;
  isLowerCase?: boolean;
};

const BookCategories = ({ categories, isLowerCase }: PropsType) => {
  return (
    <div>
      {categories?.map((c) => (
        <BookCategory category={c} key={c} isLowerCase={isLowerCase} />
      ))}
    </div>
  );
};

export default BookCategories;
