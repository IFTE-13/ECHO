import React from 'react';
import { Link } from 'react-router-dom';
import Feedback from '../Home/Feedback/Feedback';

const ClientReview = () => {
    return (
        <div className="mt-5">
            <Link to="/home" className="text-center"><h1>EC<span className="high">HO</span></h1></Link>
            <Feedback></Feedback>
        </div>
    );
};

export default ClientReview;