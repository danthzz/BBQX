// eslint-disable-next-line no-unused-vars
import React from "react";
import band1 from '../assets/bands/band1.jpg';
import band2 from '../assets/bands/band2.jpg';
import band3 from '../assets/bands/band3.jpg';
import band4 from '../assets/bands/band4.jpg';
import band5 from '../assets/bands/band5.jpg';
import band6 from '../assets/bands/band6.jpg';
import { BandCard } from './cards';

export default function Workers() {
    return (
        <div className="container space-top" id="band">
            <h2 className="text-center mb-4">Atrações Musicais</h2>
            <div className="row justify-content-center">
                <BandCard image={band1} />
                <BandCard image={band2} />
                <BandCard image={band3} />
                <BandCard image={band4} />
                <BandCard image={band5} />
                <BandCard image={band6} />
            </div>
        </div>
    );
}
