import React, { useEffect, useState } from 'react';
import './Home.css';
import { Link } from "react-router-dom";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
            })
    }, [])

    return (
        <>
            <div className="row mb-2 home">
                {
                    blogs.map((blog) => {
                        const { _id, image, title, date } = blog;

                        return (
                                <div className="col-md-4 blog" key={_id}>
                                    <Link to={`/details/${_id}`}>
                                        <img src={`data:image/png;base64,${image?.img}`} className="img-fluid" alt={title}></img>
                                        <h5 className="mt-3 homeTitle">{title}</h5>
                                    </Link>
                                    <p className="mt-2 text-muted date">{date}</p>
                                </div>
                        )
                    })
                }
            </div>
        </>
    );
};

export default Home;