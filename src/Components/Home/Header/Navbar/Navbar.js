import React, { useContext } from 'react';
import './Navbar.css';
import menu from '../../../../images/menu.png';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="container mb-2 body">
            <nav className="navbar navbar-expand-lg">
                <div>
                    <Link to="/home"><h1 className="text-dark mx-3"><span className="high">E</span>C<span className="high">H</span>O</h1></Link>
                </div>
                <button className="navbar-toggler btn border border-dark w-40 ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-3 p-1">
                            <Link to="/admin_user"> <button className="nav-item btn">
                                Admin/User
                            </button></Link>
                        </li>
                        <li className="nav-item active mr-3 p-1">
                            <a className="nav-link btn" href="/home">Home</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link btn" href="#carousel">Works</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link btn" href="/service">Service</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link btn" href="/clientreview">Review</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            <a className="nav-link btn" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item mr-3 p-1">
                            {
                                loggedInUser.email ? <button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75" onClick={() => setLoggedInUser({})}>Sign Out, {loggedInUser.name}</button> :
                                    <Link to="/login"><button className="nav-item btn">Sign In</button></Link>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;