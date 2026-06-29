import loopImg from '@/assets/images/icons/search.svg';
import closureImg from '@/assets/images/icons/cross.svg';
import styles from './Input.module.scss';

type PlaceHolder = {
  placeholder?: string;
  visible: boolean;
};

const Input = ({ placeholder, visible }: PlaceHolder) => {
  return (
    <div className={styles.container}>
      <img src={loopImg} alt="loop" className={styles.image} />
      <input className={styles.input} placeholder={placeholder} />
      <img
        src={closureImg}
        alt="close"
        className={`${styles.image_close} ${visible ? styles.visible : styles.hidden}`}
      />
    </div>
  );
};

export default Input;
