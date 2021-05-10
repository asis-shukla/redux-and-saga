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
  } catch (error) {
    yield put(
      actions.usersError({
        error: "An Error Occured when trying to get all the users",
      })
    );
  }
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
  } catch {
    yield put(
      actions.usersError({
        error: "An error occured when trying to add new user",
      })
    );
  }
}

function* watchAddNewUserRequest() {
  yield takeLatest(actions.Types.ADD_USER_REQUEST, addNewUser);
}

function* deleteUser({ payload }) {
  try {
    yield call(api.deleteUser, { userId: payload.userId });
    yield call(getUsers);
  } catch (error) {
    yield put(
      actions.usersError({
        error: "An Error occured when trying to delete the users",
      })
    );
  }
}

function* watchDeleteUserRequest() {
  yield takeLatest(actions.Types.DELETE_USER_REQUEST, deleteUser);
}

const usersSaga = [
  fork(watchGetUsersRequest),
  fork(watchAddNewUserRequest),
  fork(watchDeleteUserRequest),
];

export default usersSaga;
