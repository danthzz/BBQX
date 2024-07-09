import React from "react";
import bbq from '../assets/2.png'
import bbqm from '../assets/3.png'

export default function Protein() {
    return (
        <div className="container space-top" id="stations">
            <h2 className="text-center mb-4">Estações</h2>
            <img src={bbq} className="img-fluid d-xl-block d-none banner1" alt="Cardapio" />
            <img src={bbqm} className="img-fluid d-xl-none d-block banner1" alt="Cardapio" />
        </div>
    );
}
