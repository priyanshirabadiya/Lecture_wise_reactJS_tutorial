import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './Components/Signup';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Home from './Components/Home';
import Edit from './Components/Edit';
import Create from './Components/Create';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Signin />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/home' element={<Home />} ></Route>
          <Route path='/create' element={<Create />} ></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
