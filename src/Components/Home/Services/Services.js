import { LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ServicesData from './ServicesData/ServicesData';


const Services = () => {
    const [services, setServices] = useState([]);
    const [redirect, setRedirect] = useState();

    // Database
    useEffect(() => {
        fetch("https://lit-ocean-57294.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setRedirect(true)
            })
    }, [redirect]);

    return (
        <div className="container text-light" id="service">
            {services.length === 0 && <LinearProgress />} <br />
            <h3 align="center" className="text-dark"><b> Provide awesome <strong className="text-danger"> services </strong> </b></h3>
            <div className="d-flex justify-content-center">
                <div className="mx-auto w-100 row mt-2 pt-5">
                    {
                        services.map(service => <ServicesData service={service} key={service.name}></ServicesData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;