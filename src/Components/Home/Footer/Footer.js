import React from 'react';

const Footer = () => {
    return (
        <div className="pb-5 text-dark bod pt-4">
            <div className="container border border-dark pb-4">
                <div className="row">
                    <div className="col-md-5  mt-5">
                        <h2><b> Let us handle your <br /><strong className="text-danger"> GLASS </strong> with Love and Care </b></h2>
                        <p className="text-justify">Glass, an inorganic solid material that is usually transparent or translucent as well as hard, brittle, and impervious to the natural elements. Glass has been made into practical and decorative objects since ancient times, and it is still very important in applications as disparate as building construction, housewares, and telecommunications. It is made by cooling molten ingredients such as silica sand with sufficient rapidity to prevent the formation of visible crystals.</p>
                    </div>
                    <div className="col-md-6 offset-md-1 mt-5" id="footer">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="name" className="form-control" placeholder="Your name/company's name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="subject" name="subject" placeholder="Your message" style={{ height: "200px", width: "100%" }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-light border border-dark w-25">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;