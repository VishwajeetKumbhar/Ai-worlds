import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import Features from './Components/Features';
import AnimCursor from './Components/AnimCursor';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';


function App() {
  return (
    <>
      <AnimCursor />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='gallery' element={<Gallery />} />
      </Routes>
    </>
  );
}

export default App;
