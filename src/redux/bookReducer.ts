import { getBook as getBookApi, getBooks as getBooksApi } from "api";
import { BaseThunkType, InferActionsTypes } from "./store";
import store from "redux/store";
import { toast } from "react-toastify";
let initialState = {
  books: [] as Array<BookType>,
  book: undefined as BookType | undefined,
  categoryOption: {
    value: "all",
    label: "Все",
  } as SelectOptionType,
  sortByOption: {
    value: "relevance",
    label: "Актуальное",
  } as SelectOptionType,
  titleBook: "" as string,
  isLoadingHomePage: false as boolean,
  startIndex: 0 as number,
  maxResults: 30,
};

const bookReducer = (
  state = initialState,
  action: ActionTypes
): InitialStateType => {
  switch (action.type) {
    case "App-reducer/SET_BOOKS": {
      return {
        ...state,
        books: action.books,
        isLoadingHomePage: false,
        startIndex: 0,
      };
    }
    case "App-reducer/MERGE_BOOKS": {
      return {
        ...state,
        books: [...state.books, ...action.books],
        startIndex: action.startIndex,
      };
    }

    case "App-reducer/SET_CATEGORY_OPTION": {
      return {
        ...state,
        categoryOption: action.categoryOption,
      };
    }
    case "App-reducer/SET_SORT_BY_OPTION": {
      return {
        ...state,
        sortByOption: action.sortByOption,
      };
    }
    case "App-reducer/SET_TITLE_BOOK": {
      return {
        ...state,
        titleBook: action.titleBook,
      };
    }
    case "App-reducer/SET_IS_LOADING_HOME_PAGE": {
      return {
        ...state,
        isLoadingHomePage: action.isLoadingHomePage,
      };
    }

    case "App-reducer/SET_BOOK": {
      return {
        ...state,
        book: action.book,
      };
    }
    default:
      return state;
  }
};

export const actions = {
  setBooks: (books: Array<BookType>) =>
    ({ type: "App-reducer/SET_BOOKS", books: books } as const),
  mergeBooks: (books: Array<BookType>, index: number) =>
    ({
      type: "App-reducer/MERGE_BOOKS",
      books: books,
      startIndex: index,
    } as const),
  setCategoryOption: (categoryOption: SelectOptionType) =>
    ({
      type: "App-reducer/SET_CATEGORY_OPTION",
      categoryOption: categoryOption,
    } as const),
  setSortByOption: (sortByOption: SelectOptionType) =>
    ({
      type: "App-reducer/SET_SORT_BY_OPTION",
      sortByOption: sortByOption,
    } as const),
  setTitleBook: (titleBook: string) =>
    ({
      type: "App-reducer/SET_TITLE_BOOK",
      titleBook: titleBook,
    } as const),
  setIsLoadingHomePage: (value: boolean) =>
    ({
      type: "App-reducer/SET_IS_LOADING_HOME_PAGE",
      isLoadingHomePage: value,
    } as const),

  setBook: (book?: BookType) =>
    ({
      type: "App-reducer/SET_BOOK",
      book: book,
    } as const),
};

// For home page
export const requestGetBooks = (startIndex: number) => async () => {
  const state = store.getState().bookReducer;
  const response = await getBooksApi({
    maxResults: state.maxResults.toString(),
    orderBy: state.sortByOption.value,
    startIndex: startIndex.toString(),
    subject: state.categoryOption.value,
    titleBook: state.titleBook,
  }).then((res) => {
    return res;
  });
  return response;
};

export const getBooks = (): ThunkType => async (dispatch) => {
  const state = store.getState().bookReducer;
  if (state.titleBook.trim() === "") {
    toast.error(`Поле "Название книги" не должно быть пустым`);
  } else {
    dispatch(actions.setIsLoadingHomePage(true));
    const response = dispatch(requestGetBooks(0));
    response.then((res) => {
      if (res && "items" in res.data) {
        dispatch(actions.setBooks(res.data.items));
      } else {
        dispatch(actions.setBooks([]));
      }
    });
  }
};

export const showMore = (): ThunkType => async (dispatch) => {
  const state = store.getState().bookReducer;
  const index = state.startIndex + state.maxResults;
  const response = dispatch(requestGetBooks(index));
  response.then((res) => {
    if (res && "data" in res) {
      dispatch(actions.mergeBooks(res.data.items, index));
    } else {
    }
  });
};

export const changeCategoryOption =
  (categoryOption: SelectOptionType): ThunkType =>
  async (dispatch) => {
    dispatch(actions.setCategoryOption(categoryOption));
  };

export const changeSortByOption =
  (sortByOption: SelectOptionType): ThunkType =>
  async (dispatch) => {
    dispatch(actions.setSortByOption(sortByOption));
  };

export const changeTitleBook =
  (titleBook: string): ThunkType =>
  async (dispatch) => {
    dispatch(actions.setTitleBook(titleBook));
  };

//For book page
export const getBook =
  (id: string): ThunkType =>
  async (dispatch) => {
    const response = await getBookApi({
      id: id,
    }).then((res) => {
      return res;
    });
    if (response && "data" in response) {
      dispatch(actions.setBook(response.data));
    }
  };

export const clearBook = (): ThunkType => async (dispatch) => {
  dispatch(actions.setBook());
};

export default bookReducer;

type InitialStateType = typeof initialState;

type ActionTypes = InferActionsTypes<typeof actions>;

type ThunkType = BaseThunkType<ActionTypes>;
