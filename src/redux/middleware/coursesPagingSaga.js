import { call, put, takeEvery } from "redux-saga/effects";
import { CoursesService } from "../../services/CoursesService";
import { getCoursesPaging } from "../reducer/coursesPagingSlice";

function* getCoursesDataByPaging({payload}){
    let {coursesKey,page,pageSize} = payload
    const dataSaga = yield call(() => CoursesService.getCoursesPaging(coursesKey,page,pageSize))

    yield put(getCoursesPaging(dataSaga.data))
}

function* coursesPagingSaga(){
    yield takeEvery('coursesPagingSlice/fetchCoursesPaging', getCoursesDataByPaging)
}

export default coursesPagingSaga