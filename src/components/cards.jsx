// eslint-disable-next-line no-unused-vars
import React from "react";

export function Card({ image, title, resume }) {
    return (
        <div className="worker-card-container mb-4 d-flex justify-content-center">
            <div className="position-relative worker-card rounded-3">
                <img src={image} className="background img-fluid w-100" alt="Imagem de Fundo" />
                <div className="card-content position-absolute bottom-0 start-50 translate-middle text-center text-white">
                    <h3 className="title">{title}</h3>
                    <p className="resume">{resume}</p>
                </div>
            </div>
        </div>
    );
}

export function BandCard({ image }) {
    return (
        <div className="band-card-container col-12 col-sm-8 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div className="home__img">
                <div className="loading-circle">
                    <img src={image} className="background img-fluid w-100" />
                </div>
            </div>
        </div>
    );
}

export function BbqCard({ image, title }) {
    return (
        <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
            <div className="bbq-card"> 
                <img src={image} className="img-fluid w-100 teste" alt="Imagem do BBQ" />
                <div className="position-absolute bottom-0 mb-3 start-50 translate-middle-x text-center w-100">
                    <p className="fs-4 text-color1 mb-0">{title}</p> 
                </div>
            </div>
        </div>
    );
}
export function Curador({ image, title }) {
    return (
        <div className="mb-4 d-flex justify-content-center">
            <div className="bbq-card"> 
                <img src={image} className="img-fluid w-100 teste" alt="Imagem do BBQ" />
                <div className="position-absolute bottom-0 mb-3 start-50 translate-middle-x text-center w-100">
                    <p className="fs-4 text-color1 mb-0">{title}</p> 
                </div>
            </div>
        </div>
    );
}

BandCard;
