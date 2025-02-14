import { Rev } from "./components/Rev";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/code'} element={<Rev/>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
