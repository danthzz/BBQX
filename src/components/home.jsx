// eslint-disable-next-line no-unused-vars
import React from "react";
import background from '../assets/fundo.jpg';


export default function Home() {
    return (
        <div className="container space-top" id="home">
            <img src={background} alt="" className="img-fluid banner w-100"/>
        </div>
    );
}
