import React, { useState } from 'react';
import './Header.css';

import { Link } from "react-router-dom";
import Facebook from '../../img/socials/facebook.png';
import Instagram from '../../img/socials/instagram.png';
import Hamburger from '../../img/nav/filter-right.svg'
import AddUser from '../../img/nav/addUser.png';
import AddUser1 from '../../img/nav/addUser1.png';
import SignIn from '../../img/nav/signIn.png';
import SignIn1 from '../../img/nav/signIn1.png';
import { Button, Modal } from 'react-bootstrap';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const [admin, setAdmin] = useState(false);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light header fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="logo">Retro</Link>
                    <div className="d-flex ms-auto">
                        <div className="d-flex align-items-center socials">
                            <Link to="/"><img className="social img-fluid" src={AddUser} alt="Facebook"></img></Link>
                            <Link to="/"><img className="social img-fluid" src={SignIn} alt="Facebook"></img></Link>

                        </div>
                    </div>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={Hamburger} className="img-fluid hamburger" alt="Hamburger"></img>
                    </button>
                </div>
            </nav>
            <nav className="container-fluid navbar navbar-expand-lg bg-light header2 fixed-top">
                <div className="collapse navbar-collapse totalNav" id="navbarSupportedContent">
                    <div className="nav-scroller py-1 mb-2 m-auto">
                        <nav className="nav d-flex justify-content-between">

                            <li className="ps-5">All Blogs</li>
                            <li className="ps-5" onClick={handleShow}>Create a Blog</li>

                        </nav>
                    </div>
                </div>
            </nav>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Blogs</Modal.Title>
                </Modal.Header>
                <form className="px-2 py-2">
                    <div class="form-group">
                        <label>Blog Title</label>
                        <input type="text" class="form-control" name="title" />
                    </div>

                    <div class="form-group">
                        <label>Blog Content</label>
                        <textarea class="form-control" name="content" rows="10"></textarea>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlFile1">Add a cover image</label>
                        <input type="file" class="form-control-file" name="image" />
                    </div>
                </form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Header;