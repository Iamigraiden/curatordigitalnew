import './App.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';
import {Route, Routes } from 'react-router';
import Index from './pages/Index'
import Header from './components/common/Header';
import Errorpage from './pages/Errorpage.jsx';
import Footer from './components/common/Footer.jsx';
import Aboutus from './pages/Aboutus.jsx';
// import Aboutus from './pages/Aboutus.jsx';

function App() {
  

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Index/>}/>
      {/* <Route path='/aboutus' element={<Aboutus/>}/> */}
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path="*" element={<Errorpage/>} />
     </Routes>
     <Footer/>
    </>
      
  )
}

export default App
