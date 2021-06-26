import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "../../App";
import './Header.css';
import { Link } from "react-router-dom";
import Hamburger from '../../img/nav/filter-right.svg'
import { Modal } from 'react-bootstrap';

const Header = () => {
    const [user, setUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/isAdmin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: user.email }),
        })
            .then((res) => res.json())
            .then((data) => setIsAdmin(data));
    }, []);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = () => {
        const formData = new FormData();
        console.log(info);
        formData.append("file", file);
        formData.append("title", info.title);
        formData.append("content", info.content);
        formData.append("date", new Date().toDateString());

        fetch("http://localhost:5000/addABlog", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light header fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="logo">Retro</Link>
                    <div className="d-flex ms-auto">
                        <div className="d-flex align-items-center">
                            <Link to="/profile" className="button">{user.name || user.email}</Link>
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
                            <Link to="/home" className="ps-5">All Blogs</Link>
                            {
                                isAdmin && <Link className="ps-5" onClick={handleShow}>Create a Blog</Link>

                            }

                        </nav>
                    </div>
                </div>
            </nav>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a Blog</Modal.Title>
                </Modal.Header>
                <form className="modalForm">
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Blog title" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Content</label>
                        <textarea onBlur={handleBlur} type="text" rows="10" className="form-control" name="content" placeholder="Write your content here..." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Upload a cover image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <button type="submit" className="button" onClick={() => handleSubmit()}>Submit</button>
                </form>
            </Modal>
        </>
    );
};

export default Header;