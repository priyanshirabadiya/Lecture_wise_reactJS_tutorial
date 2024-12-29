import './App.css';
import Props from './tasks/C_components';
import img from './assets/boy.webp';
import img2 from './assets/man.jpg';
import img3 from './assets/women.avif';
function App() {
  return (
    <>
      <h1 className='text-center mt-4 text-4xl font-bold' >New three components</h1>
      <div className='flex w-screen items-center justify-center flex-wrap '>
        <Props name="David Dell" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates repudiandae. " img={img}  ></Props>
        <Props name="Rose Bush" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates repudiandae." img={img2} ></Props>
        <Props name="Jones Gli" para="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates repudiandae." img={img3} ></Props>
      </div>
    </>
  );
}

export default App;
