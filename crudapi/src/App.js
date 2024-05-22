import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';
import Login from './components/Login';
import Create from './components/Create';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
