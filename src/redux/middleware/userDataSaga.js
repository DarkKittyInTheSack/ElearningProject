import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { UserService } from "../../services/UserService";
import { fetchUserToState } from "../reducer/userDataSlice";

function* takeUserData(){
    const dataSaga = yield call(() => UserService.getAllUser())

    yield put(fetchUserToState(dataSaga.data))
}

function* userDataSaga(){
    yield takeEvery('userDataSlice/getAllUser',takeUserData)
}

export default userDataSaga