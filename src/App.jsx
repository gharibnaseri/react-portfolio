import { useState } from 'react';
import './app.scss'
import Navbar from './component/navbar/Navbar';
import {animate, motion} from 'framer-motion'
const App = () => {

  

  return <div>
    <section>
      <Navbar />
    </section>
    <section>hero</section>
    <section>parallex</section>
    <section>services</section>
    <section>parallex</section>
    <section>portfolio1</section>
    <section>portfolio2</section>
    <section>portfolio3</section>
    <section>contact</section>
    </div>;
};

export default App;
