// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from "react";
import mojs from "@mojs/core";

const createSquareAnimation = (el) => {
  if (!el) return;

  const square = new mojs.Shape({
    parent: el,
    shape: "rect",
    stroke: "#9b241e",
    strokeWidth: 3,
    fill: "none",
    radius: 150,
    duration: 3000,
    easing: "linear.none",
    repeat: 9999,
    isShowStart: false,
    strokeDasharray: {"50%" : "50%"},
    strokeDashoffset: { "100%": "0%" }
  });

  square.play();
};

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
  const bbqCardRef = useRef(null);

  useEffect(() => {
    createSquareAnimation(bbqCardRef.current);
  }, []);

  return (
    <div className="col-12 col-sm-8 col-md-6 col-lg-4 col-xxl-3 mb-4 d-flex justify-content-center">
      <div ref={bbqCardRef} className="bbq-card">
        <img src={image} className="img-fluid w-100 teste" alt="Imagem do BBQ" />
        <div className="position-absolute bottom-0 mb-3 start-50 translate-middle-x text-center w-100">
          <p className="fs-2 text-color1 mb-0">{title}</p>
        </div>
      </div>
    </div>
  );
}

export function Curador({ image, title }) {
  const curadorCardRef = useRef(null);

  useEffect(() => {
    createSquareAnimation(curadorCardRef.current);
  }, []);

  return (
    <div className="mb-4 d-flex justify-content-center">
      <div ref={curadorCardRef} className="bbq-card">
        <img src={image} className="img-fluid w-100" alt="Imagem do Curador" />
        <div className="position-absolute bottom-0 mb-3 start-50 translate-middle-x text-center w-100">
          <p className="fs-3 text-color1 mb-0">{title}</p>
        </div>
      </div>
    </div>
  );
}