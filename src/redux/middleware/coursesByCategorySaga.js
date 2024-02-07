import { call, put, takeEvery } from "redux-saga/effects";
import { getCoursesByCategory } from "../reducer/coursesByCategorySlice";
import { CoursesService } from "../../services/CoursesService";

function* getDataBySaga({payload}){
    const {maDanhMucKhoahoc} = payload
    const category = yield call(() => CoursesService.getCoursesByCategory(maDanhMucKhoahoc))

    yield put(getCoursesByCategory(category.data))
}

function* coursesByCategorySaga(){
    yield takeEvery('coursesByCategory/getDataToFetch', getDataBySaga)
}

export default coursesByCategorySaga