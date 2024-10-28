/*eslint-disable*/
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Flip from './Pages/Flip';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Flip/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;