import React from 'react';
import './Home.css';
import image from '../../img/banner/Galaxy Shop Bang.png';
import image2 from '../../img/banner/banner-image.png';


const Home = () => {
    return (
        <div className="home">
            <div class="row mb-2">
                <div class="col-md-4">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="p-5">
                            <img src={image} className="img-fluid" alt="imageBanner"></img>
                        </div>
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">World</strong>
                            <h3 class="mb-0">Featured post</h3>
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="p-5">
                            <img src={image2} className="img-fluid" alt="imageBanner"></img>
                        </div>
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">World</strong>
                            <h3 class="mb-0">Featured post</h3>
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="p-5">
                            <img src={image} className="img-fluid" alt="imageBanner"></img>
                        </div>
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">World</strong>
                            <h3 class="mb-0">Featured post</h3>
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="p-5">
                            <img src={image} className="img-fluid" alt="imageBanner"></img>
                        </div>
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">World</strong>
                            <h3 class="mb-0">Featured post</h3>
                            <div class="mb-1 text-muted">Nov 12</div>
                            <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;