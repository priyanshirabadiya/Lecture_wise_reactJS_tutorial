import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/1_Header/Header'
import './components/Main_res.css';
import Footer from './components/Footer/Footer';
import Errorpage from './components/N_Pages/404_Error/Errorpage'
import Home from './components/0_Home/Home';
import Contact from './components/N_contact/Contact' 
import Shop from './components/N_shop/Shop2/Shop'
function App() {
  return (
    <>
      <div className='' >
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/error" element={<Errorpage />} ></Route>
            <Route path="/contact" element={<Contact/>} ></Route>
            <Route path="/shop" element={<Shop/>} ></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
