import { Avatar } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Dashboard from '../Dashboard';

const Review = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({});
    const history = useHistory();


    const handleBlur = e => {
        const newAdmin = { ...admin };
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }

    const onSubmitEvent = () => {
        const formData = new FormData()
        formData.append('name', admin.name);
        formData.append('desig', admin.desig);
        formData.append('desc', admin.desc);
        formData.append('photo', loggedInUser.photo);

        fetch('https://lit-ocean-57294.herokuapp.com/review', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
            })
            .catch(error => {
                // console.error(error)
            })
        history.push('/#review')
    };

    return (
        <section className="m-3">

            <div className="row mt-5">
                <div className="col-md-3">
                    <Dashboard></Dashboard>
                </div>
                <div className="col-md-9">
                    <div className="d-flex justify-content-between">
                        <h4 className="text-light">Add Review</h4>
                        <h4 className="text-light">{loggedInUser.name}</h4>
                    </div>
                    <div className="adminService p-4">
                        <form id="reviewUp" action="" onSubmit={handleSubmit(onSubmitEvent)}>
                            <section className="orderServe mt-5">

                                <Avatar src={loggedInUser.photo}></Avatar> <br />

                                <div className="mb-3">
                                    <input style={{ border: "none" }} defaultValue={loggedInUser.name} onBlur={handleBlur} className="w-100 mx-auto form-control" name="name" placeholder="Name" ref={register({ required: true })} />
                                    {errors.eventName && <span className="error">Name is required</span>}
                                </div>

                                <div className="mb-3">
                                    <input style={{ border: "none" }} onBlur={handleBlur} className="w-100 mx-auto form-control" name="desig" placeholder="Mirror Category" ref={register({ required: true })} />
                                    {errors.eventName && <span className="error">Mirror Category</span>}
                                </div>

                                <div className="mb-3">
                                    <textarea style={{ height: "120px", width: "100%", border: "none" }} onBlur={handleBlur} className="w-100 mx-auto form-control" name="desc" placeholder="Service Details" ref={register({ required: true })} />
                                    {errors.eventName && <span className="error">Description is required</span>}
                                </div>

                                <button className="btn btn-light border border-dark w-25 p-3" type="submit">Submit</button>

                            </section>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Review;