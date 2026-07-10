import imageDesctop from '@/assets/images/header-l.jpg';
import imageMobile from '@/assets/images/header-s.jpg';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.content}>
      <picture className={styles.img}>
        <source media="(max-width: 1210px)" srcSet={imageMobile} />
        <source media="(min-width: 1211px)" srcSet={imageDesctop} />
        <img src={imageDesctop} alt="image" className={styles.img} />
      </picture>
      <h1 className={styles.title}>live music</h1>
    </header>
  );
};

export default Header;
