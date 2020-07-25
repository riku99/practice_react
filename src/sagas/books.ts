import { put, takeLatest, call } from "redux-saga/effects";

import get from "../apis/books";
import { getBooks } from "../actions/books";

function* runGetBooks(action: ReturnType<typeof getBooks.getBook>) {
  try {
    const response = yield call(get, action.url);
    yield put(getBooks.success(response));
  } catch (error) {
    yield put(getBooks.error(error.message));
  }
}

export function* watchGetBooks() {
  yield takeLatest("GET_BOOK", runGetBooks);
}
