import styles from './Header.module.scss';
import image from '@/assets/images/header-l.jpg';

const Header = () => {
  return (
    <div className={styles.content}>
      <img src={image} alt="image" className={styles.img} />
      <p className={styles.title}>live music</p>
    </div>
  );
};

export default Header;
