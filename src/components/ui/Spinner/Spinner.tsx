import SpinImg from '@/assets/images/icons/Spinner.svg?react';
import styles from './Spinner.module.scss';

type SpinnProps = {
  isLarge: boolean;
};

const Spinner = ({ isLarge }: SpinnProps) => {
  return <SpinImg className={`${styles.spinner} ${isLarge ? styles.large : styles.small}`} />;
};

export default Spinner;
