import React from "react";
import background from '../assets/fundo.jpg';


export default function Home() {
    return (
        <div className="container " id="home">
            <img src={background} alt="" className="img-fluid"/>
        </div>
    );
}
