import { useContext } from 'react';
import Select from 'react-select';

import { categoryContext } from '@/contexts/categoryContext';
import { CATEGORY } from '@/types/category';

import styles from './Accordion.module.scss';

const options = [
  { value: CATEGORY.POPULAR, label: 'popular' },
  { value: CATEGORY.RECENT, label: 'recent' },
];

const Accordion = () => {
  const { category, setCategory } = useContext(categoryContext);

  return (
    <Select
      options={options}
      value={options.find((opt) => opt.value === category)}
      onChange={(option) => setCategory(option?.value || CATEGORY.POPULAR)}
      className={styles.accordion}
      classNamePrefix="custom-select"
      isSearchable={false}
    />
  );
};

export default Accordion;
