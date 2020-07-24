import { connect } from "react-redux";
import { Dispatch } from "redux";

import Counter from "../components/counter";
import { initialState } from "../reducer";

// stateからpropsとして渡したいデータをreduxのstateから抽出するための関数
// connectに渡されることでstateにReduxのstateが渡される
// そしてこの戻り値がカリー化された関数の二回めの引数に渡すpropsに渡されることになる
const mapStatetoProps = (state: initialState) => ({
  count: state.count,
});

const mapDispatchtoProps = (dispatch: Dispatch) => ({
  increse: () => dispatch({ type: "INCREMENT" }),
  decrese: () => dispatch({ type: "DECREMENT" }),
  countreset: () => dispatch({ type: "COUNTRESET" }),
  onIncrementAsync: () => dispatch({ type: "INCREMENT_ASYNC" }),
});

export type forCounterState = ReturnType<typeof mapStatetoProps>;
export type forCounterDispatch = ReturnType<typeof mapDispatchtoProps>;

// Reduxとコンポーネントをconnectする
export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);
