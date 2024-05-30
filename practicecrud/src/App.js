import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './Components/Home';
import Delete from './Components/Delete';
import Edit from './Components/Edit';
import Create from './Components/Create';
import Navbar from './Components/Navbar';
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/delete" element={<Delete/>}  ></Route>
          <Route path="/edit/:id" element={<Edit/>}  ></Route>
          <Route path="/create" element={<Create/>}  ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
