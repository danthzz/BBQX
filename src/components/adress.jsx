import React from "react";

export default function Adress() {
    return (
        <div className="container mb-5" id="adress">
            <h2 className="text-center mb-5">Onde Estaremos? </h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240380.36158786528!2d-44.16652395216761!3d-19.715044376174703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa661bdccbaf56d%3A0x4c759eab25fd668a!2sParque%20De%20Exposi%C3%A7%C3%A3o%20Pedro%20Leopoldo!5e0!3m2!1spt-BR!2sbr!4v1718830665523!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3"
            ></iframe>
        </div>
    );
}
