import React from "react";
import './cards.css'; // Lembre-se de criar e importar o arquivo CSS

function Card({ image, title, resume }) {
    return (
        <div className="worker-card-container col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
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

export default Card;
