import styles from './Header.module.scss';
import image from '@/assets/images/header-l.jpg';

const Header = () => {
  return (
    <div className={styles.content}>
      <img src={image} alt="image" className={styles.img} />
      <h1 className={styles.title}>live music</h1>
    </div>
  );
};

export default Header;
