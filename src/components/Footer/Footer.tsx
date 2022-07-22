import GitHub from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/logo.png';
import styles from './Footer.module.scss';
import { IFooterProps } from './Footer.props';

function Footer(props: IFooterProps) {
  return (
    <div className={styles.footerContainer}>
      <hr />
      <div className={styles.footer}>
        <div className={styles.socialLinks}>
          <a href="https://github.com/abhisheksingh98" target="_blank">
          <img style={{height: '2rem'}}  src={GitHub} alt="GitHub link" />
          </a>
          <img src={Instagram} alt="Instagram link" />
          <a href="https://linkedin.com/in/abhisheksingh98" target="_blank">
          <img style={{height: '2rem'}} src={LinkedIn} alt="LinkedIn link" />
          </a>
        </div>
        <div className={styles.logoF}>
          <img src={"https://dynamic.health4you.com.au/resources.php?image=listings/3/3/1/19331/logo/3259.jpeg"} alt="Logo" />
        </div>
      </div>
      <div className={styles.blurOne} />
      <div className={styles.blurTwo} />
    </div>
  );
}

export default Footer;
