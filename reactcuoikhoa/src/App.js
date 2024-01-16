import { Routes,Route } from 'react-router-dom'
import BasicTemplate from './templates/BasicTemplate/BasicTemplate';
import Home from './pages/UserHomePage/Home';
import CourseDetail from './pages/CourseDetail/CourseDetail';

function App() {
  return (
    <>
      <Routes>
        <Route element={<BasicTemplate/>} path='/'>
          <Route element ={<Home/>} index>
            
          </Route>
          <Route element={<CourseDetail/>} path='/detail'/>
        </Route>

      </Routes>
    </>
  );
}

export default App;
