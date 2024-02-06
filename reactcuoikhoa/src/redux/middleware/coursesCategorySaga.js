import { call, put, takeEvery } from "redux-saga/effects";
import { CoursesCategoryService } from "../../services/CoursesCategoryService";
import { getAllCoursesCategory } from "../reducer/coursesCategorySlice";

function* getCousesCategoryFromAPI(){
    const dataSaga = yield call(() => CoursesCategoryService.getAllCategory())

    yield put(getAllCoursesCategory(dataSaga.data))
}

function* coursesCategorySaga(){
    yield takeEvery('coursesCategory/fetchCoursesCategory', getCousesCategoryFromAPI)
}

export default coursesCategorySaga