import { useState } from 'react';
import './App.css';
import Login from './components/Pages/Login';
import Profile from './components/Pages/Profile';
import UserContextProvider from './components/context/UsecontextProvider';
function App() {

  return (
    <div className='App'>
    <UserContextProvider>
      REACT CONTEXT API
      <Login />
      <Profile />
    </UserContextProvider>
    </div>
  );
}

export default App;


