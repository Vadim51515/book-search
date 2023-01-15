
type PropsType = {
  authors?:Array<string>
}
const BookAuthors = ({authors}:PropsType) => {
  return (
    <div>
      <p>{authors?.toString()}</p>
    </div>
  );
}

export default BookAuthors