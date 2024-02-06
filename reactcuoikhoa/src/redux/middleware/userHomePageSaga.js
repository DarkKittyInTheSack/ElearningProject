import {call,put, takeEvery} from 'redux-saga/effects'
import { getAllCourses } from '../reducer/userHomePageSlice'
import { CoursesService } from '../../services/CoursesService'

function* getCourseDataFromAPI(){
    const courses = yield call(() => CoursesService.getAllCourses())

    yield put(getAllCourses(courses.data))
}

function* userHomePageSaga(){
    yield takeEvery("userHome/fetchCourses",getCourseDataFromAPI)
}

export default userHomePageSaga