import { takeEvery, call, fork, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    console.log(result);
    yield put(
      actions.getUsersSuccess({
        items: result.data.data,
      })
    );
  } catch (error) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* addNewUser({ payload }) {
  try {
    const resultStatus = yield call(api.createUser, {
      firstName: payload.firstName,
      lastName: payload.lastName,
    });
    console.log(resultStatus);
    yield call(getUsers);
  } catch {}
}

function* watchAddNewUserRequest() {
  yield takeLatest(actions.Types.ADD_USER_REQUEST, addNewUser);
}

const usersSaga = [fork(watchGetUsersRequest), fork(watchAddNewUserRequest)];

export default usersSaga;
