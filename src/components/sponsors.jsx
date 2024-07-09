import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import fm98 from '../assets/sponsors/98.png';
import sicredi from '../assets/sponsors/sicredi.png';
import soubh from '../assets/sponsors/soubh.png';
import blink from '../assets/sponsors/blink.png';
import uai from '../assets/sponsors/uai.png';
import avivar from '../assets/sponsors/avivar.png';
import asiafood from '../assets/sponsors/asiafood.png';

export default function Sponsors() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768 );
    const [isMid, setIsMid] = useState(window.innerWidth >= 768 && window.innerWidth < 1200);
    const [isBig, setIsBig] = useState(window.innerWidth > 1200);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        setIsMid(window.innerWidth > 768 && window.innerWidth < 988);
        setIsBig(window.innerWidth < 988);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let slidesPerView;
  switch (true) {
    case isMobile:
      slidesPerView = 2;
      break;
    case isMid:
      slidesPerView = 3;
      break;
    case isBig:
      slidesPerView = 4;
      break;
    default:
      slidesPerView = 4;
  }
    const sponsors = [blink, sicredi, avivar, fm98, soubh, uai, asiafood];

    return (
        <div className="container space-top" id="sponsors">
            <h2 className="text-center mt-4 mb-4">Patrocinadores</h2>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={5}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {sponsors.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} className="img-fluid spons" alt="Patrocinador" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
