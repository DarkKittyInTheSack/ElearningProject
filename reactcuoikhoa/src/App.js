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
          <Route element={<Profile/>} path='/profile'/>
          <Route element={<PublicProfileView/>} path='/profile/public'/>
          <Route element={<Subcriptions/>} path='/profile/subcriptions'/>
          <Route element={<PaymentMethods/>} path='/profile/payments'/>
        </Route>

        <Route element={<BusinessTemplate/>} path='/business'>
            <Route element={<BusinessHome/>} index>
              
            </Route>
        </Route>

        <Route element={<TeacherTemplate/>} path='/teacher'>
            <Route element={<TeacherPage/>} index>
              
            </Route>
            <Route element={<AddNewCourses/>} path='newCourses'/>
        </Route>
        

      </Routes>
    </>
  );
}

export default App;
