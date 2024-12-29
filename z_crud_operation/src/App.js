import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Create from './Components/Create';
import Edit from './Components/Edit';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/create" element={<Create />} ></Route>
          <Route path="/edit/:id" element={<Edit />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
