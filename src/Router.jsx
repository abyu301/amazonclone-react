import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './Pages/Payment/Payment';
import Orders from './Pages/Orders/Orders';
import Landing from './Pages/Landing/Landing';
import SignIn from './Pages/Auth/Signup';
import Cart from './Pages/Cart/Cart';

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default Routing;