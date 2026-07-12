import type { ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  children?: ReactNode;
  disabled: boolean;
  onClick?: () => void;
};

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
