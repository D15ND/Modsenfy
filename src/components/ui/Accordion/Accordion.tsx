import { categoryContext } from '@/contexts/categoryContext';
import { useContext } from 'react';
import styles from './Accordion.module.scss';

const Accordion = () => {
  const { category, setCategory } = useContext(categoryContext);

  return (
    <select
      value={category}
      className={styles.accardion}
      onChange={(e) => setCategory(e.target.value)}
    >
      <option className={styles.subtitle} value="popular">
        Popular
      </option>
      <option className={styles.subtitle} value="recent">
        Recent
      </option>
    </select>
  );
};

export default Accordion;
