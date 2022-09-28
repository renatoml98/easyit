import React from 'react';
import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={`${styles.heading2} text-left max-w-[40%]`}>
        About our team.
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[80%]`}>
        At EasyIT we help develop innovative solutions to simplify operations that wouldn´t otherwise be considered efficient, we build integrated solutions that revolutionize the way processes are managed.
        <br className="sm:block hidden" />
        We are a team of software engineers always focused on surpassing everything we do.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
    {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials