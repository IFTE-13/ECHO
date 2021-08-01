import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51Idzg3D862cNyvGFW5PBkbtqCoIXfynJ2W55Rc9TLCJfgwfcguGdQ2QYObv2yZIisgf4uqJPueWMhlSvkTOafRh100A7O7GPnW');

const ProcessPayment = () => {
    return (
        <div className="container card mt-5 bg-light text-dark">
            <Elements stripe={stripePromise}>
                <SimpleCardForm />
            </Elements>
        </div>
    );
};

export default ProcessPayment;