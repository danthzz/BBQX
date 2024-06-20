import React, { useState, useEffect } from "react";
import mgs from '../assets/mgs.png';

export default function Sponsors() {
    const [carouselItems, setCarouselItems] = useState([]);
    const updateCarouselItems = () => {
        const isMobile = window.innerWidth < 768;
        const items = isMobile ?
            [
                [mgs, mgs],
                [mgs, mgs],
                [mgs, mgs],
                [mgs, mgs],
                [mgs, mgs],
                [mgs, mgs]
            ] :
            [
                [mgs, mgs, mgs, mgs],
                [mgs, mgs, mgs, mgs],
                [mgs, mgs, mgs, mgs],
                [mgs, mgs, mgs, mgs]
            ];

        const newCarouselItems = items.map((itemSet, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="4000" data-bs-ride="true">
                <div className="d-flex flex-wrap">
                    {itemSet.map((src, idx) => (
                        <img key={idx} src={src} className={`d-block ${isMobile ? 'w-50' : 'w-md-25 w-25'} img-fluid`} alt="..." />
                    ))}
                </div>
            </div>
        ));

        setCarouselItems(newCarouselItems);
    };

    useEffect(() => {
        updateCarouselItems();
        window.addEventListener('resize', updateCarouselItems);
        return () => window.removeEventListener('resize', updateCarouselItems);
    }, []);

    return (
        <div className="container" id="sponsors">
            <h2 className="text-center mt-4 mb-4"> Patrocinadores</h2>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    {carouselItems}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
