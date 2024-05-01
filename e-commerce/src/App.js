import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/1_Header/Header'
import './components/Main_res.css';
import Footer from './components/Footer/Footer';
import Errorpage from './components/7_Error_page/Errorpage'
import Home from './components/0_Home/Home';
function App() {
  return (
    <>
      <div className='' >
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/error" element={<Errorpage />} ></Route>
            <Route path="/" ></Route>
            <Route path="/" ></Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
