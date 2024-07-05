import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Footer() {
    return (
        <>
            <footer className="site-footer">
                <div className="site-footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-6 col-12">
                                <h2 className="text-white mb-lg-0">TLBC'24</h2>
                            </div>

                            <div className="col-lg-6 col-12 d-flex justify-content-lg-end align-items-center">
                                <ul className="social-icon d-flex justify-content-lg-end">
                                    <li className="social-icon-item">
                                        <a href="#" className="social-icon-link">
                                            <span className="bi-twitter"></span>
                                        </a>
                                    </li>

                                    <li className="social-icon-item">
                                        <a href="#" className="social-icon-link">
                                            <span className="bi-apple"></span>
                                        </a>
                                    </li>

                                    <li className="social-icon-item">
                                        <a href="#" className="social-icon-link">
                                            <span className="bi-instagram"></span>
                                        </a>
                                    </li>

                                    <li className="social-icon-item">
                                        <a href="#" className="social-icon-link">
                                            <span className="bi-youtube"></span>
                                        </a>
                                    </li>

                                    <li className="social-icon-item">
                                        <a href="https://web.facebook.com/thelordsbrethrenchurchintl" className="social-icon-link">
                                            <span className="bi-facebook"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12 mb-4 pb-2">
                            <h5 className="site-footer-title mb-3">Links</h5>

                            <ul className="site-footer-links">
                                <li className="site-footer-link-item">
                                    <Link to={`/`} className="site-footer-link">Home</Link>
                                </li>

                                <li className="site-footer-link-item">
                                    <Link to={`/Gallery`} className="site-footer-link">Gallery</Link>
                                </li>

                                <li className="site-footer-link-item">
                                    <Link to={`/Partners`} className="site-footer-link">Partner with us</Link>
                                </li>

                                <li className="site-footer-link-item">
                                    <Link to={`/Register`} className="site-footer-link">Register</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                            <h5 className="site-footer-title mb-3">Have a question?</h5>

                            <p className="text-white d-flex mb-1">
                                <a href="tel: 090-080-0760" className="site-footer-link">
                                    090-3186-8409
                                </a>
                            </p>

                            <p className="text-white d-flex">
                                <a href="mailto:hello@company.com" className="site-footer-link">
                                    info@thelordsbrethrenchurch.org
                                </a>
                            </p>
                        </div>

                        <div className="col-lg-3 col-md-6 col-11 mb-4 mb-lg-0 mb-md-0">
                            <h5 className="site-footer-title mb-3">Location</h5>

                            <p className="text-white d-flex mt-3 mb-2">
                                To be announced soon</p>
                        </div>
                    </div>
                </div>

                <div className="site-footer-bottom">
                    <div className="container">
                        <p className="text-center text-white pt-4">Copyright © 2024 || TLBC'24 Planning Team</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer