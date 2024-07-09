// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import logo from '../assets/logos/LOGO-01.png';
import som from '../assets/Malta.mp3';

export default function Navbar() {
    const [audio, setAudio] = useState(false);
    const audioRef = useRef(null);
    const togglerRef = useRef(null);
    const collapseRef = useRef(null);


    const handleUserInteraction = () => {
        if (audioRef.current && !audio) {
            audioRef.current.play().catch(() => {});
            setAudio(true);
        }
    };

    useEffect(() => {
        if (audio) {
            audioRef.current.play().catch(() => {});
        } else {
            audioRef.current.pause();
        }
    }, [audio]);

    useEffect(() => {
        window.addEventListener('click', handleUserInteraction);
        window.addEventListener('keydown', handleUserInteraction);
        window.addEventListener('scroll', handleUserInteraction);

        return () => {
            window.removeEventListener('click', handleUserInteraction);
            window.removeEventListener('keydown', handleUserInteraction);
            window.removeEventListener('scroll', handleUserInteraction);
        };
    }, []);

    const scrollToSection = (divId) => {
        const section = document.getElementById(divId);
        if (section) {
            const offset = section.offsetTop - 100;
            window.scroll({
                top: offset,
                behavior: "smooth"
            });

            if (togglerRef.current && collapseRef.current.classList.contains('show')) {
                togglerRef.current.setAttribute('aria-expanded', 'false');
                collapseRef.current.classList.remove('show');
            }
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-black z-1 fixed-top py-0">
            <div className="container-fluid">
                <img src={logo} alt="" className="navbar-brand logo py-1" />
                <button
                    className="navbar-toggler bg-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    ref={togglerRef}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse align-items-center justify-content-center text-center"
                    id="navbarTogglerDemo02"
                    ref={collapseRef}
                >
                    <ul className="navbar-nav mb-2 align-items-center">
                        <li className="nav-item me-4 ms-3">
                            <a className="nav-link" aria-current="page" onClick={() => scrollToSection('home')}>Home</a>
                        </li>
                        <li className="nav-item me-4 ms-3">
                            <a className="nav-link" aria-current="page" onClick={() => scrollToSection('tickets')}>Ingressos</a>
                        </li>
                        <li className="nav-item me-4 ms-3">
                            <a className="nav-link" onClick={() => scrollToSection('band')}>Atrações</a>
                        </li>
                        <li className="nav-item me-4 ms-3">
                            <a className="nav-link" onClick={() => scrollToSection('stations')}>Estações</a>
                        </li>
                        <li className="nav-item me-4 ms-3">
                            <a className="nav-link ms-2" onClick={() => scrollToSection('pics')}>Fotos</a>
                        </li>
                        <li className="nav-item me-4 ms-3">
                            <a className="nav-link ms-2" onClick={() => scrollToSection('adress')}>Endereço</a>
                        </li>
                    </ul>
                    {/* <ul className="navbar-nav ms-md-auto mb-2 justify-content-center text-center align-items-center">
                        <li className="nav-item">
                            {audio ? <VolumeUp className="text-white" onClick={handleAudioOff} /> : <VolumeOff className="text-white" onClick={handleAudioOn} />}
                        </li>
                    </ul> */}
                </div>
                <audio ref={audioRef} src={som} loop />
            </div>
        </nav>
    );
}
