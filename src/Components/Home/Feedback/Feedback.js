import React, { useEffect, useState } from 'react';
import FeedbackData from './FeedbackData/FeedbackData';

const Feedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const [redirect, setRedirect] = useState();

    // Database
    useEffect(() => {
        fetch("https://lit-ocean-57294.herokuapp.com/getReview")
            .then(res => res.json())
            .then(data => {
                setFeedbacks(data)
                setRedirect(true)
            })
    }, [redirect]);

    return (
        <div className="mb-5 text-dark" id="review">
            {feedbacks.length === 0 && <h1 align="center"> Please Wait......... </h1>}
            <h3 align="center" className="text-dark"><b> Clients <strong className="text-danger"> Feedback </strong></b><hr style={{ backgroundColor: "crimson" }} className="w-25" /></h3>
            <div className="d-flex justify-content-center mt-3">
                <div className="mx-auto w-100 row mt-2 pt-4">
                    {
                        feedbacks.map(feedback => <FeedbackData feedback={feedback} key={feedback._id}></FeedbackData>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feedback;