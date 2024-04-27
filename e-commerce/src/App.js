import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Cate from './components/Catagories/Cate';
import Dropdown from './components/Cat_nav/Dropdown';
import Number from './components/Number/Number';
import './components/Main_res.css'
import Slider from './components/Slider/Slider';
import TwoB from './components/TwoB/TwoB';
function App() {
  return (
    <>
    <main className='mb-96' >
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
          <div className='flex  wrap-div ' >
            <div className=' mt-2 '> <Slider /></div>
            <div className=' mt-2 '> <TwoB/></div>
          </div>
        </div>
      </div>
      </main>

    </>
  );
}

export default App;
