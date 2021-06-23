import React from 'react';
import './Header.css';

import { Link } from "react-router-dom";
import Facebook from '../../img/socials/facebook.png';
import Instagram from '../../img/socials/instagram.png';
import Hamburger from '../../img/nav/filter-right.svg'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white header fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="logo">Retro</Link>
                    <div className="d-flex ms-auto">
                        <div className="d-flex align-items-center socials">
                            <a href="https://www.facebook.com/jahidhasan.juyel.10" target="_blank"><img className="social img-fluid" src={Facebook} alt="Facebook"></img></a>
                            <a href="https://instagram.com/jahidhasanjuyel/" target="_blank"><img className="social img-fluid" src={Instagram} alt="Instagram"></img></a>
                        </div>
                    </div>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={Hamburger} className="img-fluid hamburger" alt="Hamburger"></img>
                    </button>
                </div>
            </nav>
            <nav className="container-fluid navbar navbar-expand-lg bg-white header2 fixed-top">
                <div className="collapse navbar-collapse totalNav" id="navbarSupportedContent">
                    <div className="nav-scroller py-1 mb-2 m-auto">
                        <nav className="nav d-flex justify-content-between">
                            <li className="ps-5">World</li>
                            <li className="ps-5">Technology</li>
                            <li className="ps-5">Culture</li>
                            <li className="ps-5">Sports</li>
                            <li className="ps-5">Business</li>
                            <li className="ps-5">Politics</li>
                            <li className="ps-5">Style</li>
                            <li className="ps-5">Travel</li>
                        </nav>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;