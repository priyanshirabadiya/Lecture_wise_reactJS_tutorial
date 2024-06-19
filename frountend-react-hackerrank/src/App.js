import logo from './logo.svg';
import './App.css';
import Input from './Components/Input';
import { useState } from 'react';
function App() {

  const [text1 , settext1] = useState('')
  const [text2 , settext2] = useState('')
  const handleTextChange1 = (e) => {
    settext1(e.target.value)
  }

  const cleardatacontain = () => {
    settext1('')
    settext2('')
  }

  const handleTextChange2 = (e) => {
    settext2( e.target.value)
  }

    return (
    <div className="App">
      <div data-testid={"text1"}>
        <Input labelText="Text 1" cleardata={cleardatacontain} onChange={handleTextChange1} />
      </div>
      <div data-testid={"text2"}>
        <Input labelText="Text 2" onChange={handleTextChange2} />
      </div>
      <div>Appende name is :</div>
      <div>{text1}{text2}</div>
    </div>
  );
}

export default App;
