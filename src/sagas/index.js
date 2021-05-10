import usersSaga from "./users";
import blogsSaga from "./blogs";

import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([...usersSaga, ...blogsSaga]);
}
