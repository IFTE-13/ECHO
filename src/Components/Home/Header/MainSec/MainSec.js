import React from 'react';
import './MainSec.css';
const MainSec = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center align-items-center item">
                <div className="col-md-4">
                    <h1 className="text-dark"><strong> Let's Fix your<br />Glass with care </strong></h1>
                    <p className="text-dark font-weight-bold">Glass is a non-crystalline, often transparent amorphous solid, that has widespread practical, technological, and decorative use in, for example, window panes, tableware, and optics. Glass is most often formed by rapid cooling of the molten form; some glasses such as volcanic glass are naturally occurring.</p>
                    <button className="mx-auto btn-light text-light bg-dark w-50 btn">Hire us</button>
                </div>
                <div className="mr-2 col-md-6 offset-md-1 p-2 headMainImg">
                </div>
            </div>
        </div>
    );
};

export default MainSec;