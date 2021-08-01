import React from 'react';
import logo from '../../../../images/logos/logo1.png';
import logo2 from '../../../../images/logos/logo2.png';
import logo3 from '../../../../images/logos/logo3.png';
import logo4 from '../../../../images/logos/logo4.png';
import logo5 from '../../../../images/logos/logo5.png';
import Fade from 'react-reveal/Fade';

const Partnership = () => {
    return (
        <div className="container mt-5 w-80">
            <h3 className="text-dark text-center"><b>In association with</b><hr style={{ backgroundColor: "crimson" }} className="w-25" /></h3>
            <div className="row d-flex justify-content-center">
                <Fade left cascade>
                    <img style={{ width: "15vh", height: "15vh", margin: "2vh" }} src={logo} alt="" />
                    <img style={{ width: "15vh", height: "15vh", margin: "2vh" }} src={logo2} alt="" />
                    <img style={{ width: "15vh", height: "15vh", margin: "2vh" }} src={logo3} alt="" />
                    <img style={{ width: "15vh", height: "15vh", margin: "2vh" }} src={logo4} alt="" />
                    <img style={{ width: "15vh", height: "15vh", margin: "2vh" }} src={logo5} alt="" />
                </Fade>
            </div>
        </div>
    );
};

export default Partnership;