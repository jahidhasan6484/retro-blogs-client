import React, { useEffect, useState } from 'react';
import './Details.css';
import image from "../../img/details/details (2).jpg";
import { useParams } from 'react-router';

const Details = () => {
    const [details, setDetails] = useState([])

    const { id } = useParams();
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id])

    const selectedBlog = details.find(details => details?._id === id);
    console.log(selectedBlog);

    return (
        <div className="container details">
            <div className="row">
                <div className="d-flex flex-column align-center col-md-4">
                    <p className="date">{selectedBlog?.date}</p>
                    <p className="title">{selectedBlog?.title}</p>
                    <p className="writer">-By Admin</p>
                </div>
                <div className="col-md-8">
                    <img src={`data:image/png;base64,${selectedBlog?.image?.img}`} className="img-fluid" alt="detailsImage" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-10">
                    <p className="content">{selectedBlog?.content}</p>
                </div>
                <div className="col-md-2">
                    <p>Share</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </div>
        </div>
    );
};

export default Details;