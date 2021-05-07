import { takeEvery, call, fork, put } from "redux-saga/effects";
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

function* AddNewUser(item) {}

function* watchAddNewUserRequest() {
  yield takeEvery(actions.Types.ADD_USER_REQUEST, AddNewUser);
}

const usersSaga = [fork(watchGetUsersRequest)];

export default usersSaga;
