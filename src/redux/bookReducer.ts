import { getBook as getBookApi, getBooks as getBooksApi } from "api";
import { BaseThunkType, InferActionsTypes } from "./store";
import store from "redux/store";
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

  setBook: (book: BookType) =>
    ({
      type: "App-reducer/SET_BOOK",
      book: book,
    } as const),
};

// For home page
export const getBooks = (): ThunkType => async (dispatch) => {
  dispatch(actions.setIsLoadingHomePage(true));
  const state = store.getState().bookReducer;

  const response = await getBooksApi({
    orderBy: state.sortByOption.value,
    startIndex: "0",
    subject: state.categoryOption.value,
    titleBook: state.titleBook,
  }).then((res) => {
    return res;
  });
  console.log("response", response);

  if (response && "data" in response) {
    dispatch(actions.setBooks(response.data.items));
  } else {
    dispatch(actions.setIsLoadingHomePage(false));
  }
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

export default bookReducer;

type InitialStateType = typeof initialState;

type ActionTypes = InferActionsTypes<typeof actions>;

type ThunkType = BaseThunkType<ActionTypes>;
