import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './Pages/Payment/Payment';
import Auth from './Pages/Auth/Auth';
import Orders from './Pages/Orders/Orders';
import Landing from './Pages/Landing/Landing';
import Cart from './Pages/Cart/Cart';
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';

const stripePromise = loadStripe(
    "pk_test_51OhEX2LC8d43cyLBPpFQtW6qW50nZSUK7GhZ8Io8Kd8qW9hiivnt7Cwz033MXbAyBYqrFvB7fWJ5UPahaCcQPNgW00ABHxUPGI"
);

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Landing />} />
                <Route path='/signin' element={<Auth />} />
                <Route path='/payments' element={
                    <ProtectedRoute 
                    msg={"You must log-in to pay first"} redirect={"/payments"}>
                        <Elements stripe={stripePromise}>
                            <Payment />
                        </Elements>
                    </ProtectedRoute>
                } />
                <Route path='/orders' element={
                    <ProtectedRoute 
                    msg={"You must log-in first to access your orders "} redirect={"/orders"}>
                            <Orders />
                    </ProtectedRoute>
               } />
                <Route path='/category/:categoryName' element={<Results />} />
                <Route path='/products/:productId' element={<ProductDetail />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </Router>
    );
}

export default Routing;
