import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/login';
import Main from './pages/main';


function App() {
  return (
    <Router>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>} />
     </Routes> 
    </Router>
  );
}

export default App;
