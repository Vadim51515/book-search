import { getBooks as getBooksApi } from "api";
import { BaseThunkType, InferActionsTypes } from "./store";
let initialState = {
  books: [] as Array<BookType>,
};

const bookReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "App-reducer/SET_BOOKS": {
      console.log("123");

      return {
        ...state,
        books: action.books,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setBooks: (books: Array<BookType>) =>
    ({ type: "App-reducer/SET_BOOKS", books: books } as const),
};

export const getBooks = (): ThunkType => async (dispatch) => {
  const response = await getBooksApi().then((res) => {
    return res;
  });
  if (response && "data" in response) {
    dispatch(actions.setBooks(response.data.items));
  }
};

//////////////////////////////////////// Dispatch<ActionTypes>
// export const initialize = () => (dispatch:any) => {
//     const promize = dispatch(getUserData())
//    Promise.all([promize]).then(() => {
//         dispatch(actions.initializedSuccess())
//     })
// }

export default bookReducer;

type InitialStateType = typeof initialState;

type ActionTypes = InferActionsTypes<typeof actions>;

type ThunkType = BaseThunkType<ActionTypes>;
