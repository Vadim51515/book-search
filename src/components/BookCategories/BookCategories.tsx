import BookCategory from "components/BookCategories/BookCategory/BookCategory";

type PropsType = {
  categories?: Array<string>;
  isLowerCase?: boolean;
  propsCategoriesContainer?: string;
};

const BookCategories = ({ categories, isLowerCase, propsCategoriesContainer }: PropsType) => {
  return (
    <div className={propsCategoriesContainer}>
      {categories?.map((c) => (
        <BookCategory category={c} key={c} isLowerCase={isLowerCase} />
      ))}
    </div>
  );
};

export default BookCategories;
