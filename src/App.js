
import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
   <div className='app'>
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='sidebar' element={<Sidebar />} />
          <Route path='navbar' element={<Navbar />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
