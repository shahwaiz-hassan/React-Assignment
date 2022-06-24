import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="contact">
            <h3 className="h3style"> CONTACT US</h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="contact-info">
                            <h3>Contact Info</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Voluptatum, quisquam.
                            </p>
                            <div className="contact-address">
                                <p>
                                    <span>Address:</span>
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatum, quisquam.
                                    </span>
                                </p>
                                <p>
                                    <span>Phone:</span>
                                    <span>+880123456789</span>
                                </p>
                                <p>
                                    <span>Email:</span>
                                    <span>abc@gmail.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="contactfrom">
                            <form id="signup" class="form">
                                <h1>Sign Up</h1>
                                <div className="form-field">
                                    <label for="username">Username:</label>
                                    <input type="text" name="username" id="username" autocomplete="off"></input>
                                    <small></small>
                                </div>

                                <div className="form-field">
                                    <label for="email">Email:</label>
                                    <input type="text" name="email" id="email" autocomplete="off"></input>
                                    <small></small>
                                </div>

                                <div className="form-field">
                                    <label for="password">Password:</label>
                                    <input type="password" name="password" id="password" autocomplete="off"></input>
                                    <small></small>
                                </div>


                                <div className="form-field">
                                    <label for="confirm-password">Confirm Password:</label>
                                    <input type="password" name="confirm-password" id="confirm-password" autocomplete="off"></input>
                                    <small></small>
                                </div>

                                <div className="form-field">
                                    <input type="submit" value="Sign Up"></input>
                                </div>
                            </form>
                        </div>

                    </div>
                    </div>
                    </div>
        </section>
    )
}
