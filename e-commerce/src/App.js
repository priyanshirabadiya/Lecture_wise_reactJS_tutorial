import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/1_Header/Header'
import './components/Main_res.css';
import Footer from './components/Footer/Footer';
import Errorpage from './components/N_Pages/404_Error/Errorpage'
import Home from './components/0_Home/Home';
import Contact from './components/N_contact/Contact'
import Shop from './components/N_shop/Shop/Shop'
import Shop2 from './components/N_shop/Shop2/Shop'
import Sign_in from './components/N_Pages/Sign_In/Sign_in';
import Shop_Location from './components/N_shop/ShopLocation/Shop_details';
import Wishlist from './components/N_shop/Wishlist/Wishlist';
import ProductTrack from './components/N_shop/ProductTrack/ProductTrack';
import About from './components/N_Pages/About/About';
import Firstline from './components/1_Header/Firstline/Firstline';
import FirstData from './components/Popular_contain/FirstData';
function App() {
  return (
    <>
      <Firstline />
      <div className='xl:w-full xl:container mx-auto'>
        <div>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/error" element={<Errorpage />} ></Route>
              <Route path="/contact" element={<Contact />} ></Route>
              <Route path="/shop" element={<Shop />} ></Route>
              <Route path="/shop2" element={<Shop2 />} ></Route>
              <Route path="/signin" element={<Sign_in />} ></Route>
              <Route path="/shop_details" element={<Shop_Location />} ></Route>
              <Route path="/wishlist" element={<Wishlist />} ></Route>
              <Route path="/ProductTrack" element={<ProductTrack />} ></Route>
              <Route path="/about" element={<About />} ></Route>
              <Route path="/product/:id" element={<FirstData/>} ></Route>
            </Routes>
          </BrowserRouter>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
