import { motion } from 'framer-motion';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import { Button, Header } from '..';
import Calories from '../../assets/calories.png';
import Heart from '../../assets/heart.png';
import HeroImage from '../../assets/hero_image.png';
import HeroImageBack from '../../assets/hero_image_back.png';
import useMediaQuery from '../../hooks/useMediaQuery';
import styles from './Hero.module.scss';
import { IHeroProps } from './Hero.props';

function Hero(props: IHeroProps) {
  const transition = { type: 'spring', duration: 3 };
  const mobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {}, [mobile]);

  return (
    <div className={styles.hero} id="home">
      <div className={styles.blur} />
      <div className={styles.leftH}>
        <Header />

        <div className={styles.theBestAd}>
          <motion.div
            initial={{ left: mobile ? '165px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          />
          <span>the best fitness club in the town</span>
        </div>

        <div className={styles.heroText}>
          <div>
            <span>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build ideal body and live up your life to
              fullest
            </span>
          </div>
        </div>

        <div className={styles.figures}>
          <div>
            <span>
              <CountUp start={100} end={140} duration={2} prefix="+" />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <CountUp start={800} end={978} duration={2} prefix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <CountUp start={0} end={50} duration={2} prefix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className={styles.heroButtons}>
          <Button appearance="primary">Get Started</Button>
          <Button appearance="ghost">Learn More</Button>
        </div>
      </div>

      <div className={styles.rightH}>
        <Button>Join Now</Button>

        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className={styles.heartRate}>
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        <img src={HeroImage} alt="heroImage" className={styles.heroImage} />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={HeroImageBack}
          alt="heroImage back"
          className={styles.heroImageBack}
        />

        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className={styles.calories}>
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
