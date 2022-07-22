import adidas from '../../assets/adidas.png';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
import styles from './Reasons.module.scss';
import { IReasonsProps } from './Reasons.props';

function Reasons(props: IReasonsProps) {
  return (
    <div className={styles.reasons}>
      <div className={styles.leftR}>
        <img src={image1} alt="img" />
        <img src={image2} alt="img" />
        <img src={image3} alt="img" />
        <img src={image4} alt="img" />
      </div>
      <div className={styles.rightR} id="reasons">
        <span>some reasons</span>
        <div>
          <span>why</span>
          <span> choose us?</span>
        </div>

        <div className={styles.detailsR}>
          <div>
            <img src={tick} alt="arrow" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="arrow" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="arrow" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="arrow" />
            <span>RELIBLE PARTNERS</span>
          </div>
        </div>
        <span>OUR PARTNERS</span>
        <div className={styles.partners}>
          <img src={nb} alt="img" />
          <img src={adidas} alt="img" />
          <img src={nike} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
