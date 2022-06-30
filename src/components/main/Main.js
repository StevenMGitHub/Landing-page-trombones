import React from 'react'
import HowItWorks from '../how-it-works/HowItWorks';
import FastShipping from '../features/FastShipping';
import PremiunMaterials from '../features/PremiunMaterials';
import QualityAssurance from '../features/QualityAssurance';
import Hero from '../hero/Hero';
import Pricing from '../pricing/Pricing';
import Footer from '../footer/Footer';

function Main() {
    return (
    <> 
            <Hero></Hero>
            <div class="container">
                <section id="features">
                     <PremiunMaterials></PremiunMaterials>
                     <FastShipping></FastShipping>
                     <QualityAssurance></QualityAssurance>
                </section>
                <HowItWorks></HowItWorks>
                <Pricing></Pricing>
                <Footer></Footer>
            </div>
    </>
    )
}

export default Main;