import React from "react";
import gta from '../assets/gta.webp';
import Card from './cards';

export default function Workers() {
    return (
        <div className="container mt-4" id="workers">
            <h2 className="text-center mb-4">Assadores</h2>
            <div className="row justify-content-center">
                <Card image={gta} title="Teste" resume="Lore Ipsum" />
                <Card image={gta} title="Teste" resume="Lore Ipsum" />
                <Card image={gta} title="Teste" resume="Lore Ipsum" />
                <Card image={gta} title="Teste" resume="Lore Ipsum" />
            </div>
        </div>
    );
}
