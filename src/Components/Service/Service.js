import React from 'react';
import { Link } from 'react-router-dom';
import Services from '../Home/Services/Services';

const Service = () => {
    return (
        <div className="mt-5">
            <Link to="/home"><h1 className="text-dark text-center">EC<span className="high">HO</span></h1></Link>
            <Services></Services>
        </div>
    );
};

export default Service;