import React, { useEffect, useRef, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials } from "./components";
import styles from './style';

function App() {

    const { ref: myRef, inView: myElementIsVisible} = useInView();

    return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Stats/>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials forwardedRef={myRef} isVisible={myElementIsVisible}/>
          <Clients/>
          <CTA/>
          <Footer/>
        </div>
      </div>

    </div>
  );
}

export default App