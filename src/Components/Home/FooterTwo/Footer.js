import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const FooterTwo = () => {
    return (
        <div className="bod pt-5">
            <div className="container">
                <section className="d-flex justify-content-center align-items-center text-dark row p-3">
                    <div className="col-md-6 text-center">
                        <Link to="/home"><h1>REG<span className="high">AR</span>DER</h1></Link>
                        <h6>262, Sk Mujib Road, Dewanhat, Chittagong</h6>
                        <h6 className="text-danger">Bangladesh</h6>
                        <p className="text-info">Contact +8801234567890</p>
                    </div>
                    <div className="col-md-2">
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
                    <div className="col-md-2">
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
                    <div className="col-md-2">
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
                    <p className="text-center mt-4">All rights reserved by IFTE'13 @2021</p>
                </section>
            </div>
        </div>
    );
};

export default FooterTwo;