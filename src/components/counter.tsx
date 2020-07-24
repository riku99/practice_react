import React, { FC } from "react";
import { Link } from "react-router-dom";

import { forCounterState } from "../containers/counter";
import { forCounterDispatch } from "../containers/counter";

type Count = forCounterState & forCounterDispatch;

const Count: FC<Count> = ({
  count,
  increse,
  decrese,
  countreset,
  onIncrementAsync,
}) => {
  return (
    <>
      <h1>カウンター</h1>
      <button onClick={onIncrementAsync}>Increment after 1 second</button>
      <input type="button" value="ぷらす" onClick={increse} />
      <input type="button" value="まいなす" onClick={decrese} />
      <input type="button" value="リセット" onClick={countreset} />
      <div>{count}</div>
      <Link to="/">ホームに戻る</Link>
    </>
  );
};

export default Count;
