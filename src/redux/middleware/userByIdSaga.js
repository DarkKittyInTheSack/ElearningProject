import { call, put, takeEvery } from "redux-saga/effects";
import { UserService } from "../../services/UserService";
import { getDataFromfetch } from "../reducer/userGetByIDSlice";

function* fetchDataByID({payload}){
    let {taiKhoan} = payload
    const dataSaga = yield call(() => UserService.getUserById(taiKhoan))

    yield put(getDataFromfetch(dataSaga.data[0]))
}

function* userByIdSaga(){
    yield takeEvery('userGetByIDSlice/fetchUserData',fetchDataByID)
}

export default userByIdSaga