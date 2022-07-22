import { motion } from 'framer-motion';
import { useState } from 'react';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';
import { testimonialsData } from '../../data/testimonialsData';
import styles from './Testimonials.module.scss';
import { ITestimonialsProps } from './Testimonials.props';

function Testimonials(props: ITestimonialsProps) {
  const [selected, setSelected] = useState<number>(0);
  const transition = { type: 'spring', duration: 3 };
  const tLength = testimonialsData.length;

  return (
    <div className={styles.testimonials} id="testimonials">
      <div className={styles.leftT}>
        <span>Testimonials</span>
        <span>What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}>
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: '#f48915' }}> {testimonialsData[selected].name}</span> -{' '}
          {testimonialsData[selected].status}
        </span>
      </div>
      <div className={styles.rightT}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        />
        <motion.img
          src={testimonialsData[selected].image}
          alt="avatar"
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
        />
        <div className={styles.arrows}>
          <img
            src={leftArrow}
            alt="left arrow"
            onClick={() => {
              selected === 0 ? setSelected(tLength - 1) : setSelected((prev) => prev - 1);
            }}
          />
          <img
            src={rightArrow}
            alt="right arrow"
            onClick={() => {
              selected === tLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
