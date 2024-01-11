import { Routes,Route } from 'react-router-dom'
import BasicTemplate from './templates/BasicTemplate/BasicTemplate';

function App() {
  return (
    <>
      <Routes>
        <Route element={<BasicTemplate/>} path='/'>

        </Route>

      </Routes>
    </>
  );
}

export default App;
