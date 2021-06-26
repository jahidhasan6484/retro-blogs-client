import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from "../../App";
import './Home.css';
import { Link } from "react-router-dom";
import Delete from '../../img/details/trash.png';
import Zoom from 'react-reveal/Zoom';


const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const [user, setUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch("https://polar-retreat-26099.herokuapp.com/isAdmin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: user.email }),
        })
            .then((res) => res.json())
            .then((data) => setIsAdmin(data));
    }, []);

    useEffect(() => {
        fetch('https://polar-retreat-26099.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setLoading(false);
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`https://polar-retreat-26099.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const remainBlogs = blogs.filter(blog => blog._id !== id);
                    setBlogs(remainBlogs);
                }
            });
    };

    return (
        <>
            {
                loading ? <div className="loading">
                    <p className="text-center">Loading...</p>
                </div> :
                    <Zoom>
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
                                            <div className="d-flex blogFooter">
                                                <p className="mt-2 text-muted date">{date}</p>
                                                {
                                                    isAdmin && <img src={Delete} onClick={() => handleDelete(_id)} alt="Delete"></img>
                                                }
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Zoom>
            }


        </>
    );
};

export default Home;