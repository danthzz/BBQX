// eslint-disable-next-line no-unused-vars
import React from "react";
import img1 from '../assets/pics/img1.jpg';
import img2 from '../assets/pics/img2.jpg';
import img3 from '../assets/pics/img3.jpg';
import img4 from '../assets/pics/img4.jpg';
import img5 from '../assets/pics/img5.jpg';
import img6 from '../assets/pics/img6.jpg';

export default function Pics() {
    return (
        <div className="container space-top align-items-center" id="pics">
            <h2 className="text-center mb-5">Última Edição</h2>
            <div className="row d-flex justify-content-center">
                {/* Primeira coluna */}
                <div className="col-md-4 col-10 mb-4">
                    <img src={img2} className="img w-100 rounded-3" alt="img2" />
                </div>
                {/* Segunda coluna */}
                <div className="col-md-4 mb-4">
                    <div className="row d-flex justify-content-center">
                        <div className="col-sm-6 col-5 mb-4 mt-1">
                            <img src={img1} className="img w-100 rounded-3" alt="img1" />
                        </div>
                        <div className="col-sm-6 col-5 mb-4 mt-1">
                            <img src={img5} className="img w-100 rounded-3" alt="img5" />
                        </div>
                        <div className="col-sm-6 col-5">
                            <img src={img3} className="img w-100 rounded-3" alt="img3" />
                        </div>
                        <div className="col-sm-6 col-5">
                            <img src={img4} className="img w-100 rounded-3" alt="img4" />
                        </div>
                    </div>
                </div>
                {/* Terceira coluna */}
                <div className="col-md-4 col-10">
                    <img src={img6} className="img w-100 rounded-3" alt="img6" />
                </div>
            </div>
        </div>
    );
}
