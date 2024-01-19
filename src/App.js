import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "../src/component/Home"
import Login from "../src/component/User/Login.js"
import Individual from './component/Individual.js';
import Allcars from './component/Allcars.js';
import Booking from './component/Booking.js';
import Header from './component/layout/Header.js';
import Footer from "./component/layout/Footer.js"
import Successful from './component/Successful.js';
import Profile from "./component/User/Profile.js"
import { loaduser } from './action/useraction.js';
import store from "./store.js";
import { useEffect, useState } from 'react';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute.js';
import Confirmation from './component/Confirmation.js';
import Payment from './component/Payment.js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import NotFound from "./component/layout/NotFound.js"
import OrderDetails from "./component/OrderDetails.js"

function App() {

  const [stripeApiKey, setstripeApiKey] = useState("");

  async function getstripeapikey() {

    try {
      const { data } = await axios.get('/stripeapikey');
      setstripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error('Error fetching Stripe API key:', error);
    }
  }

  useEffect(() => {
    store.dispatch(loaduser());
    getstripeapikey();
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/car/:id' element={<Individual />} />
        <Route path='/view/cars' element={<Allcars />} />
        <Route path='/booking/:id' element={<ProtectedRoute Component={Booking} />} />
        <Route path='/confirmation/:id' element={<ProtectedRoute Component={Confirmation} />} />
        <Route path='/success' element={<ProtectedRoute Component={Successful} />} />
        <Route path='/account' element={<ProtectedRoute Component={Profile} />} />
        <Route path='/order/:id' element={<ProtectedRoute Component={OrderDetails} />} />

        {
          stripeApiKey && (
            <Route path="/payment" element={<Elements stripe={loadStripe(stripeApiKey)}><ProtectedRoute Component={Payment} /></Elements>} />
          )
        }
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
