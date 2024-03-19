
import { Routes,Route } from 'react-router-dom'
import BasicTemplate from './templates/BasicTemplate/BasicTemplate';
import Home from './pages/UserHomePage/Home';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import SearchResult from './pages/SearchResult/SearchResult';
import MyLearning from './pages/MyLearning/MyLearning';
import CategoryDetail from './pages/CategoryDetail/CategoryDetail';
import Profile from './pages/ProfilePage/Profile';
import PublicProfileView from './pages/ProfilePage/PublicProfileView';
import Subcriptions from './pages/ProfilePage/Subcriptions';
import PaymentMethods from './pages/ProfilePage/PaymentMethods';
import BusinessTemplate from './templates/BusinessTemplate/BusinessTemplate';
import BusinessHome from './pages/BusinessHome/BusinessHome';
import TeacherTemplate from './templates/TeacherTemplate/TeacherTemplate';
import TeacherPage from './pages/TeachOn/TeacherPage';
import AddNewCourses from './pages/AddNewCourses/AddNewCourses';
import './assets/styles/style.scss'

import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import CheckOut from "./pages/CheckOut/CheckOut";
import AnnounCement from "./pages/AnnounCement/AnnounCement";

import QuanLyTaiKhoanHV from "./pages/QuanLyTaiKhoanHV/QuanLyTaiKhoanHV";
import QuanLyTaiKhoanGV from "./pages/QuanLyTaiKhoanGV/QuanLyTaiKhoanGV";
import QuanLyKhoaHoc from "./pages/QuanLyKhoaHoc/QuanLyKhoaHoc";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import AdminAddCourses from './pages/QuanLyKhoaHoc/AdminAddCourses';
import AdminAddNewStudent from './pages/QuanLyTaiKhoanHV/AdminAddNewStudent';
import AdminAddNewTeacher from './pages/QuanLyTaiKhoanGV/AdminAddNewTeacher';
import UpdateCurrentStudent from './pages/QuanLyTaiKhoanHV/UpdateCurrentStudent';
import UpdateCurrentTeacher from './pages/QuanLyTaiKhoanGV/UpdateCurrentTeacher';
import QuanLyGhiDanhKhoaHoc from './pages/QuanLyGhiDanhKhoaHoc/QuanLyGhiDanhKhoaHoc';
import UpdateCourses from './pages/QuanLyKhoaHoc/UpdateCourses';
import QuanLyGhiDanhKhoaHocCHoXetDuyet from './pages/QuanLyGhiDanhKhoaHoc/QuanLyGhiDanhKhoaHocCHoXetDuyet';
import AllYourCourse from './pages/TeachOn/AllYourCourse';

function App() {
  return (
    <>
      <Routes>

        <Route element={<BasicTemplate/>} path='/'>
          <Route element ={<Home/>} index>
            
          </Route>
          <Route element={<CourseDetail/>} path='/detail/:id'/>
          <Route element={<SearchResult/>} path='/search/:data'/>
          <Route element={<MyLearning/>} path='/learning'/>
          <Route element={<CategoryDetail/>} path='/category/:id'/>
          <Route element={<Profile/>} path='/profile/:id'/>
          <Route element={<PublicProfileView/>} path='/profile/public'/>
          <Route element={<Subcriptions/>} path='/profile/subcriptions'/>
          <Route element={<PaymentMethods/>} path='/profile/payments'/>
            
          <Route element={<SignUp />} path="/signup"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<CheckOut />} path="/checkout"></Route>
          <Route element={<AnnounCement />} path="/announcement"></Route>
        </Route>

        <Route element={<BusinessTemplate/>} path='/business'>
            <Route element={<BusinessHome/>} index>
              
            </Route>
        </Route>

        <Route element={<TeacherTemplate/>} path='/teacher'>
            <Route element={<TeacherPage/>} index>
              
            </Route>
            <Route element={<AddNewCourses/>} path='newCourses'/>
            <Route element={<AllYourCourse/>} path='yourCourse/:taiKhoan'/>
        </Route>

        <Route element={<AdminTemplate />} path="/admin">
          <Route element={<QuanLyTaiKhoanHV />} path="qlhv" />
          <Route element={<QuanLyTaiKhoanGV />} path="qlgv" />
          <Route element={<QuanLyKhoaHoc />} path="qlkh" />
          <Route element={<QuanLyGhiDanhKhoaHoc />} path="qlgdkh" /> 
          <Route element={<QuanLyGhiDanhKhoaHocCHoXetDuyet />} path="qlgdkhcxd" /> 
          <Route element={<AdminAddCourses />} path="addCourses" />
          <Route element={<AdminAddNewStudent/>} path="addNewStudent" />
          <Route element={<AdminAddNewTeacher/>} path="addNewTeacher" />
          <Route element={<UpdateCurrentStudent/>} path="updateStudent/:id" />
          <Route element={<UpdateCurrentTeacher/>} path="updateTeacher/:id" />
          <Route element={<UpdateCourses/>} path="updateCourses/:id" />
        </Route>
      </Routes>
    </>
  );
}

export default App;
