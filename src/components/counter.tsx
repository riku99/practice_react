import React, { FC } from "react";
import { Link } from "react-router-dom";

type count = { count: string };

const Count: FC<count> = (prop) => {
  return (
    <>
      <h1>カウンター</h1>
      <input type="button" value="ぷらす" />
      <input type="button" value="まいなす" />
      <input type="button" value="リセット" />
      <div>{prop.count}</div>
      <Link to="/">ホームに戻る</Link>
    </>
  );
};

export default Count;
