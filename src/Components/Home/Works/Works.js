import React from 'react';
import carousel1 from '../../../images/carousel-1.jpg';
import carousel2 from '../../../images/carousel-2.jpg';
import carousel3 from '../../../images/carousel-3.jpg';
import './Works.css';

const Works = () => {
    return (
        <div className="container mt-5" id="carousel">
            <h3 className="text-dark text-center font-weight-bold">Our Works <hr style={{ backgroundColor: "crimson" }} className="w-25" /></h3>
            <div class="card-columns">
                <div class="card">
                    <img src={carousel1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Bruj Khalifa</h5>
                        <p class="card-text">Glass broken in sand tornado and fixed by us in a short time with our expert technician and advance technologies</p>
                    </div>
                </div>
                <div class="card p-3">
                    <blockquote class="blockquote mb-0 card-body">
                        <p>People are like stained - glass windows. They sparkle and shine when the sun is out, but when the darkness sets in, their true beauty is revealed only if there is a light from within.</p>
                        <footer class="blockquote-footer">
                            <small class="text-muted">
                                <cite title="Source Title">Elisabeth Kubler-Ross</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div class="card">
                    <img src={carousel2} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Home glasses</h5>
                        <p class="card-text">Fixing many houses different category glasses daily</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div class="card bg-primary text-white text-center p-3">
                    <blockquote class="blockquote mb-0">
                        <p>If slaughterhouses had glass walls, everyone would be a vegetarian.</p>
                        <footer class="blockquote-footer text-white">
                            <small>
                                <cite title="Source Title">Paul McCartney</cite>
                            </small>
                        </footer>
                    </blockquote>
                </div>
                <div class="card text-center">
                    <div class="card-body">
                        <h5 class="card-title">Car Glasses</h5>
                        <p class="card-text">Get your car glasses from us in reasonable price</p>
                    </div>
                </div>
                <div class="card">
                    <img src={carousel3} class="card-img-top " alt="..." />
                </div>
                <div class="card p-3 text-right">
                    <div class="card-body">
                        <h5 class="card-title">Industrial Glasses</h5>
                        <p class="card-text">We provide best quality glasses specially for industries</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Lastly</h5>
                        <p class="card-text">When you've achieved a goal, take the time to enjoy the satisfaction of having done so. Absorb the implications of the goal achievement, and observe the progress that you've made towards other goals.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Works;