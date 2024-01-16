import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "../src/component/Home"
import Login from "../src/component/Login.js"
import Individual from './component/Individual.js';
import Allcars from './component/Allcars.js';
import Booking from './component/Booking.js';
import Header from './component/Header.js';
import Footer from "./component/Footer.js"
import Successful from './component/Successful.js';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/car/:id' element={<Individual />} />
        <Route path='/view/cars' element={<Allcars />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/successful' element={<Successful />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
