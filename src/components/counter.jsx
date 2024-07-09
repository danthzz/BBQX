// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

export default function Counter() {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            const targetDate = new Date("2024-08-03 12:00:00");
            const difference = targetDate - currentDate;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="container" id="tickets">
            <div className="bordered justify-content-center align-items-center mt-5 pt-4 px-2 mb-3">
                <div className="col-12">
                    <div className="d-block d-lg-flex justify-content-around">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <span className="sub-title text-color1">03</span>
                            <span className="sub-title text-color1 mx-3">Ago</span>
                            <span className="sub-title text-color1">2024</span>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <a className="d-flex btn btn-tickts px-5 align-items-center" target="_blank" href="https://lets.events/e/bbqx-2024-infinitamente-surpreendente/?fbclid=PAAaZbRk7RVYW0wCJc4YN1fGoPAr1_H5-SfpjLPeNRHRBd0d14FeP7ri0vNB0_aem_AdV_WJYIvS6wfME_b7QWLH0mZQ4ANyZ7isMokq3Tz2yhopf9penEwjyxtWuMmUWE2v8" role="button">COMPRE <br /> INGRESSOS!</a>
                        </div>
                        <div className="d-flex justify-content-center text-center">
                            <div className="me-4">
                                <h6 className="countdown p-2 bordered rounded-2">Dias</h6>
                                <p className="fs-2 text-color1">{days}</p>
                            </div>
                            <div className="me-4">
                                <h6 className="countdown p-2 bordered rounded-2">Horas</h6>
                                <p className="fs-2 text-color1">{hours}</p>
                            </div>
                            <div className="me-4">
                                <h6 className="countdown p-2 bordered rounded-2">Min.</h6>
                                <p className="fs-2 text-color1">{minutes}</p>
                            </div>
                            <div className="">
                                <h6 className="countdown p-2 bordered rounded-2">Seg.</h6>
                                <p className="fs-2 text-color1">{seconds}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
