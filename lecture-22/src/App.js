// import React  from 'react'
import {BrowserRouter  ,Routes , Route} from 'react-router-dom'
import './App.css';
import React_Router_dom from './components/React_Router_dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element ={<Home/>} ></Route>
            <Route path='/about' element={<About/>} ></Route>
            <Route path='/Contact' element={<Contact/>} ></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
