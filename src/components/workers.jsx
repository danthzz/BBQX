import React from "react";
import gta from '../assets/gta.webp';
import bbq1 from '../assets/bbqs/freis.jpg'
import bbq2 from '../assets/bbqs/cleitao.jpg'
import bbq3 from '../assets/bbqs/flavio.jpg'
import bbq4 from '../assets/bbqs/kevin.jpg'
import bbq5 from '../assets/bbqs/moreno.jpg'
import bbq from '../assets/bbq.png'
import { Card, BbqCard, Curador } from './cards';

export default function Workers() {
    return (
        <div className="container  space-top" id="workers">
            <h2 className="text-center mb-4">Curador do Evento</h2>
            <Curador className='' image={bbq1} title={'Fernando Reis'} />
            <h2 className="text-center mb-4">Assadores da Terra</h2>
            <div className="row justify-content-center">
                <BbqCard image={bbq2} title={'Cleitão'} />
                <BbqCard image={bbq3} title={'Flávio'} />
                <BbqCard image={bbq4} title={'Kevin'} />
                <BbqCard image={bbq5} title={'Moreno'} />
            </div>
            {/* <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center mb-4">
                    <Card image={gta} title="Teste" resume="Lore Ipsum" />
                    <Card image={gta} title="Teste" resume="Lore Ipsum" />
                    <Card image={gta} title="Teste" resume="Lore Ipsum" />
                    <Card image={gta} title="Teste" resume="Lore Ipsum" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center mb-4">
                    <Card image={gta} title="Teste" resume="Lore Ipsum" />
                    <Card image={gta} title="Teste" resume="Lore Ipsum" />
                    <Card image={gta} title="Teste" resume="Lore Ipsum" />
                    <Card image={gta} title="Teste" resume="Lore Ipsum" />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column align-items-center mb-4">
                    <Card image={gta} title="Teste" resume="Lore Ipsum" />
                    <Card image={gta} title="Teste" resume="Lore Ipsum" />
                    <Card image={gta} title="Teste" resume="Lore Ipsum" />
                    <Card image={gta} title="Teste" resume="Lore Ipsum" />
                </div>
            </div> */}
        </div>
    );
}
