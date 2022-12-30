import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
// import Navbar from './components/navbar/Navbar';
import Register from './components/authentication/Register';



function App() {
  return (
    <>
    {/* <Navbar/> */}
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
    </>
  );
}

export default App;
