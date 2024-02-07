import { useState } from 'react';
import './app.scss'
import Navbar from './component/navbar/Navbar';
import {animate, motion} from 'framer-motion'
const App = () => {

  

  return <div>
    <section id='HomePage'>
      <Navbar />
    </section>
    <section >hero</section>
    <section>parallex</section>
    <section id='skills'>services</section>
    <section>parallex</section>
    <section id='Projects'>portfolio1</section>
    <section>portfolio2</section>
    <section>portfolio3</section>
    <section id='contacts'>contact</section>
    </div>;
};

export default App;
