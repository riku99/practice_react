import { Reducer } from "redux";

// 型定義ファイルReducerに渡す第二ジェネリックは発行されて送られてくるActionの型でなければならず、それにはtypeプロパティが含まれなくてはならない
import { CounterAction } from "./actions/counter";

// 初期化されるstoreの型。storeにプロパティを追加する時や削除するときはこれも変更する
export type initialState = { count: number };

type Actions = CounterAction;

// 最初に呼ばれるとき(createStoreに渡される時)はStateは定義されていないのでstateパラにデフォルトを与える
// Stateが定義されている場合はそれはstateパラに渡される
// Reducerのジェネリックは<state, reducer>の型を定義。reducerは必ずステイトを返すため戻り値のところにはstate型を定義
const reducer: Reducer<initialState, Actions> = (
  state = { count: 0 },
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
    // 最初に呼び出された時(createStoreに渡された時)にstateを返すためのdefault。{count: 0}というstateをcreateStoreに返すことになり、初期化することを意味する
    default: {
      return state;
    }
  }
};

export default reducer;
