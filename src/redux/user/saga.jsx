import { all, takeEvery, call, put, delay, takeLatest } from 'redux-saga/effects'
import { fetchUsersSuccess, fetchUsersFailure, fetchUserByIdSuccess, fetchUserByIdFailure } from './slice'

import axios from 'axios';
// API USERS: https://jsonplaceholder.typicode.com/users/
// The Redux-saga can be used when we need to make some asynchonous code executation or depending what the application needs.

// takeEvery: to catch every event the user does
// takeLatest: to get the last event the user does
// all: to export all sagas, it'll be used in rootSaga.jsx
// delay: to simulate a loading API
// put: to dispatch a function but it is part of the saga, it must be a saga function.

function* fetchUsers() {
  try {

    yield delay(2000);

    const response = yield call(axios.get, "https://jsonplaceholder.typicode.com/users/")
    yield put(fetchUsersSuccess(response.data))

  } catch(e) {
    yield put(fetchUsersFailure(e.message))
  }
}

function* fetchUserById(action) {
  try {
    const userId = action.payload;

    const response = yield call(axios.get, `https://jsonplaceholder.typicode.com/users/${userId}`)
    yield put(fetchUserByIdSuccess(response.data));

  } catch(e) {
    yield put(fetchUserByIdFailure(e.message));
  }
}

export default all([
  takeLatest("user/fetchUsers", fetchUsers),
  takeLatest("user/fetchUserById", fetchUserById)
])