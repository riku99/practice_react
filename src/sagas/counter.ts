import { all, put, takeEvery } from "redux-saga/effects";

import { watchGetBooks } from "./books";

export function* helloSaga() {
  console.log("Hello Saga");
  yield true;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// sagaで実行する処理はジェネレーターでかく
// sagaでのyieldは処理を中断するためのインストラクションである
// Promiseがsagaミドルウェアにyieldされたとき、sagaはそのPromiseが完了するまで待機する
// この場合はSagaはdelayがresolveを返すまで待機し、これはには1000ミリ秒かかる
// Promiseが完了したらSagaは次のyieldまで処理を再開する
// putはEffectと呼ばれるものの1つでミドルウェアの中でdispatchする。つまりアクションを発行する
// SagaミドルウェアがEffectを取り出したら、そのEffectが満たされるまで留まる
// ザックリまとめると、incrementAsyncはdelayが終了するまで1秒スリープし、そのあとアクションを発行する。
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

// takeEveryはredux-sagaのヘルパー
// ここでは "INCREMENT_ASYNC" がdispatchされるのを監視し、dispatchに応じてincrementAsyncを実行する。
export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

// 実行したいsagaが2つある。(helloSaga, watchImcrementAsync)
// indexファイルで起動させたrun()には1つのsagaしか渡すとができない
// この場合はこのようなrootSagaなどを生成し同時に複数のsagaを実行することができる
// つまりここでは2つの関数の実行結果が配列となりyieldされ、これらは平行に実行される。
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchGetBooks()]);
}
