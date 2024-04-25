import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Props from './exam/Props';
import Data from './exam/Data';
import Navbar from './exam/Navbar';
import Home from './exam/Home';
import About from './exam/About';
import Contact from './exam/Contact';

function App() {
  return (
    <div className="App mt-5 ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}  ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
