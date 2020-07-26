import { Reducer } from "redux";

// 型定義ファイルReducerに渡す第二ジェネリックは発行されて送られてくるActionの型でなければならず、それにはtypeプロパティが含まれなくてはならない
import { CounterAction } from "./actions/counter";
import { BooksAction } from "./actions/books";

// 初期化されるstoreの型。storeにプロパティを追加する時や削除するときはこれも変更する
export type initialState = {
  count: number;
  book: { title: string; authors: string[]; image: string | null };
  message: null | { errorMessage?: string };
  savedBook: { title: string; authors: string[]; image: string | null }[] | [];
};

type Actions = CounterAction | BooksAction;

// 最初に呼ばれるとき(createStoreに渡される時)はStateは定義されていないのでstateパラにデフォルトを与える
// Stateが定義されている場合はそれはstateパラに渡される
// Reducerのジェネリックは<state, action>の型を定義。reducerは必ずステイトを返すため戻り値のところにはstate型を定義
const reducer: Reducer<initialState, Actions> = (
  state = {
    message: null,
    count: 0,
    book: { title: "未選択", authors: ["未選択"], image: null },
    savedBook: [],
  },
  action
): initialState => {
  switch (action.type) {
    case "INCREMENT": {
      return { ...state, count: state.count + 1 };
    }
    case "DECREMENT": {
      return { ...state, count: state.count - 1 };
    }

    case "COUNTRESET": {
      return { ...state, count: 0 };
    }

    case "CHANGE_BOOK": {
      return {
        ...state,
        message: null,
        book: {
          title: action.data.title,
          authors: action.data.authors,
          image: action.data.image ? action.data.image : null,
        },
      };
    }

    case "ERROR_BOOK": {
      console.log(action.message);
      return {
        ...state,
        message: { errorMessage: action.message },
      };
    }

    case "SAVE_BOOK": {
      let a = [...state.savedBook, action.book];
      return {
        ...state,
        message: null,
        savedBook: a,
      };
    }

    // 最初に呼び出された時(createStoreに渡された時)にstateを返すためのdefault。{count: 0}というstateをcreateStoreに返すことになり、初期化することを意味する
    default: {
      return state;
    }
  }
};

export default reducer;
