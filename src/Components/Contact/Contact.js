import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="container">
            <div className="col-md-12 text-center text-dark">
                <Link to="/home"> <h1 className="text-center mt-5">EC<span className="high">HO</span></h1></Link>
                <h6>262, Sk Mujib Road, Dewanhat, Chittagong</h6>
                <h6 className="text-danger">Bangladesh</h6>
                <p className="text-info">Contact +8801234567890</p>
            </div>


            <div className="d-flex justify-content-center align-items-center text-center row p-3">


                <div className="col-md-4">
                    <ul>
                        <h6 className="text-primary">Products</h6>
                        <li>About Us</li>
                        <li>Legal Notice</li>
                        <li>Address</li>
                        <li>Order</li>
                        <li>Payment</li>
                        <li>Suppliers</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul>
                        <h6 className="text-primary">Company</h6>
                        <li>Delivery</li>
                        <li>Legal Notice</li>
                        <li>About Us</li>
                        <li>Prices Drop</li>
                        <li>New Products</li>
                        <li>Best Sales</li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul>
                        <h6 className="text-primary">Personal</h6>
                        <li>My Account</li>
                        <li>My Cart</li>
                        <li>Identity</li>
                        <li>Order</li>
                        <li>Contact Us</li>
                        <li>Address</li>
                    </ul>
                </div>
                <div>
                    <p className="text-center mt-5">All rights reserved by IFTE'13 @2021</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;