import { imageDesktop, imageMobile } from '@/assets/images';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <picture className={styles.img}>
        <source media="(max-width: 1210px)" srcSet={imageMobile} />
        <source media="(min-width: 1211px)" srcSet={imageDesktop} />
        <img src={imageDesktop} alt="image" className={styles.img} />
      </picture>
      <h1 className={styles.title}>live music</h1>
    </header>
  );
};

export default Header;
