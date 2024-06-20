import React from "react";
import logo2 from '../assets/LOGO-02.png'

export default function Footer() {
    return (
        <div className="bg-white py-2 border1">
            <img src={logo2} alt="" className="img-fluid f-img mb-2" />
            <span className="text-body-secondary fs d-flex justify-content-center">&#169; Daniel Gomes All right reserved</span>
        </div>
    );
}
