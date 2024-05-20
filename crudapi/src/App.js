import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create" element={<Edit />}></Route>
          <Route path="/edit" element={<Login />}></Route>
          <Route path="/login" element={<Register />}></Route>
          <Route path="/register" element={<Create />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
