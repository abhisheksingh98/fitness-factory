import cn from 'classnames';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import Logo from '../../assets/logo.png';
import useMediaQuery from '../../hooks/useMediaQuery';
import styles from './Header.module.scss';
import { IHeaderProps } from './Header.props';

function Header(props: IHeaderProps) {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const mobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (mobile) {
      setMenuOpened(false);
    }
  }, [mobile]);

  return (
    <div className={styles.header}>
      <img src={"https://dynamic.health4you.com.au/resources.php?image=listings/3/3/1/19331/logo/3259.jpeg"} className={styles.logo} alt="the fitness factory" />
      {mobile && (
        <div
          className={cn({ [styles.open]: menuOpened })}
          onClick={() => setMenuOpened((prev) => !prev)}>
          <span />
        </div>
      )}

      <ul className={cn(styles.headerMenu, { [styles.open]: menuOpened })}>
        <li>
          <Link to="home" smooth onClick={() => setMenuOpened(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="programs" smooth onClick={() => setMenuOpened(false)}>
            Programs
          </Link>
        </li>
        <li>
          <Link to="reasons" smooth onClick={() => setMenuOpened(false)}>
            Why us
          </Link>
        </li>
        <li>
          <Link to="plans" smooth onClick={() => setMenuOpened(false)}>
            Plans
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth onClick={() => setMenuOpened(false)}>
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
