import React, { useEffect, useState } from 'react';
import './Details.css';
import Reveal from 'react-reveal/Reveal';
import { useParams } from 'react-router';

const Details = () => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams();
    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                setLoading(false);
            })
    }, [id])

    const selectedBlog = details.find(details => details?._id === id);

    return (
        <>
            {
                loading ? <div className="loading">
                    <p className="text-center">Loading...</p>
                </div> :
                    <Reveal effect="fadeInUp">
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
                            </div>
                        </div>
                    </Reveal>
            }
        </>

    );
};

export default Details;