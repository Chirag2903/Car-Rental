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
import Predict from "./component/Predict.js"
import Loader from './component/layout/Loader.js';
import Error from './component/layout/Error.js';
import ScrollToTop from './component/layout/ScrollToTop.js';

function App() {

  const [stripeApiKey, setstripeApiKey] = useState("");
  const [isLoadingStripe, setIsLoadingStripe] = useState(true);

  async function getstripeapikey() {

    try {
      const { data } = await axios.get('/stripeapikey');
      setstripeApiKey(data.stripeApiKey);
    } catch (error) {
      console.error('Error fetching Stripe API key:', error);
    } finally {
      setIsLoadingStripe(false);
    }
  }

  useEffect(() => {
    store.dispatch(loaduser());
    getstripeapikey();
  }, [stripeApiKey]);

  const PaymentWrapper = () => {
    if (isLoadingStripe) {
      return <Loader />;
    }
    if (!stripeApiKey) {
      return <div>Error loading payment. Please try again.</div>;
    }
    return (
      <Elements stripe={loadStripe(stripeApiKey)}>
        <Payment />
      </Elements>
    );
  };

  return (
    <Router>
      <ScrollToTop />
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
        <Route path='/predict' element={<Predict />} />
        <Route path="/payment" element={<ProtectedRoute Component={PaymentWrapper} />} />
        <Route path='/error' element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
