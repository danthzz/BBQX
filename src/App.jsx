import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import Sponsors from './components/sponsors';
import Workers from './components/workers';
import Pics from './components/pics';
import Footer from './components/footer';
import Counter from './components/counter'
import Adress from './components/adress';
import { useInView } from './components/useView';

function App() {
    const [setHomeRef, homeInView] = useInView({ threshold: 0.1 });
    const [setSponsorsRef, sponsorsInView] = useInView({ threshold: 0.1 });
    const [setTicketsRef, ticketsInView] = useInView({ threshold: 0.1 });
    const [setWorkersRef, workersInView] = useInView({ threshold: 0.1 });
    const [setPicsRef, picsInView] = useInView({ threshold: 0.1 });
    const [setAdressRef, adressInView] = useInView({ threshold: 0.1 });

    return (
        <>
            <Navbar />
            <section
                id="home"
                ref={setHomeRef}
                className={`section ${homeInView ? 'in-view' : ''}`}
            >
                <Home />
            </section>
            <section
                id="tickets"
                ref={setTicketsRef}
                className={`section ${ticketsInView ? 'in-view' : ''}`}
            >
                <Counter />
            </section>
            <section
                id="sponsors"
                ref={setSponsorsRef}
                className={`section ${sponsorsInView ? 'in-view' : ''}`}
            >
                <Sponsors />
            </section>
            <section
                id="workers"
                ref={setWorkersRef}
                className={`section ${workersInView ? 'in-view' : ''}`}
            >
                <Workers />
            </section>
            <section
                id="pics"
                ref={setPicsRef}
                className={`section ${picsInView ? 'in-view' : ''}`}
            >
                <Pics />
            </section>
            <section
                id="adress"
                ref={setAdressRef}
                className={`section ${adressInView ? 'in-view' : ''}`}
            >
                <Adress />
            </section>
            <Footer />
        </>
    );
}

export default App;
