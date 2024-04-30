import logo from './logo.svg';
import './App.css';
import Header from './components/1_Header/Header'
import Cate from './components/2_Catagories/Cate';
import Dropdown from './components/2_Cat_nav/Dropdown';
import Number from './components/2_Number/Number';
import './components/Main_res.css'
import Slider from './components/3_Slider/Slider';
import TwoB from './components/3_TwoB/TwoB';
import Top_catagories from './components/4_Top catagories/Top_catagories'
import Popular_p from './components/5_Poular_products/Popular_p';
import Pots from './components/6_Pots/Pots';
import Footer from './components/Footer/Footer';
import Errorpage from './components/7_Error_page/Errorpage'
function App() {
  return (
    <>
      {/* <main className='align-middle flex justify-center'>
      <div>
          <Header />
          <div className=" flex ">
            <div className='sec-nav z-40' >
              <Cate />
            </div>
            <div className='mt-3 w-full '>
              <div className='flex justify-between '>
                <div className='sec-nav'><Dropdown /></div>
                <div className='sec-nav'><Number /></div>
              </div>
              <div className='flex central wrap-div lg:flex-nowrap md:flex-wrap ' >
                <div className=' mt-2 f-s'> <Slider /></div>
                <div className=' mt-2 '> <TwoB /></div>
              </div>
            </div>
          </div>
          <div className="mt-0 mx-7 ">
            <Top_catagories ></Top_catagories><hr className='mt-24' ></hr>
            <div className='mt-10 relative  ' ><Popular_p /></div>
            <div className="mt-24 relative "><Pots /></div>
          </div>
          <div className="mt-24 relative "><Footer /></div>
        </div> 
      </main> */}
      <div>
        <Errorpage />
      </div>
    </>
  );
}

export default App;
