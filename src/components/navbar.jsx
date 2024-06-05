import React, { useState, useEffect, useRef } from "react";
import "./navbar.css"; // Importe o arquivo CSS
import logo from '../assets/logow.png'
import som from '../assets/som.mp3'

import {
    VolumeUp,
    VolumeOff
} from '@mui/icons-material';

export default function Navbar() {
    const [audio, setAudio] = useState(false);
    const audioRef = useRef(null);

    const handleAudioOff = () => {
        setAudio(false)
    }

    const handleAudioOn = () => {
        setAudio(true)
    }

    useEffect(() => {
        if (audio) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [audio]);

    useEffect(() => {
        const timer = setTimeout(() => {
           setAudio(true)
        }, 2000); // Delay of 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
                <img src={logo} alt="" className="navbar-brand logo" />
                <button className="navbar-toggler bg-secondary ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-center align-items-center" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ms-auto align-items-center">
                        <li className="nav-item me-4">
                            <a className="nav-link active text-light" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link text-light" href="#">Assadores</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link text-light" href="#">Ingressos</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto justify-content-center text-center align-items-center">
                        <li className="nav-item">
                            {audio ? <VolumeUp className="text-white" onClick={handleAudioOff} /> : <VolumeOff className="text-white" onClick={handleAudioOn} />}
                        </li>
                    </ul>
                </div>
                <audio ref={audioRef} src={som} loop />
            </div>
        </nav>
    );
}
