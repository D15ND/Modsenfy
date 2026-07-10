import { closureImg, loopImg } from '@/assets/images/icons';

import styles from './Input.module.scss';

type PlaceHolder = {
  placeholder?: string;
  visible: boolean;
  value?: string;
  onChange?: (value: string) => void;
};

const Input = ({ placeholder, visible, value, onChange }: PlaceHolder) => {
  return (
    <div className={styles.container}>
      <img src={loopImg} alt="loop" className={styles.image} />
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
      <img
        src={closureImg}
        alt="close"
        className={`${styles.image_close} ${visible ? styles.visible : styles.hidden}`}
      />
    </div>
  );
};

export default Input;
