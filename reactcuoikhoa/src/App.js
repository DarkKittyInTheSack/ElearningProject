import { Routes,Route } from 'react-router-dom'
import BasicTemplate from './templates/BasicTemplate/BasicTemplate';
import Home from './pages/UserHomePage/Home';
import CourseDetail from './pages/CourseDetail/CourseDetail';
import SearchResult from './pages/SearchResult/SearchResult';
import MyLearning from './pages/MyLearning/MyLearning';

function App() {
  return (
    <>
      <Routes>
        <Route element={<BasicTemplate/>} path='/'>
          <Route element ={<Home/>} index>
            
          </Route>
          <Route element={<CourseDetail/>} path='/detail'/>
          <Route element={<SearchResult/>} path='/search'/>
          <Route element={<MyLearning/>} path='/learning'/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
