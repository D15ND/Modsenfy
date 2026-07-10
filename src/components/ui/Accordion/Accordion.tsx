import { useContext } from 'react';
import Select from 'react-select';

import { categoryContext } from '@/contexts/categoryContext';

import styles from './Accordion.module.scss';

const Accordion = () => {
  const { category, setCategory } = useContext(categoryContext);

  const options = [
    { value: 'popular', label: 'popular' },
    { value: 'recent', label: 'recent' },
  ];

  return (
    <Select
      options={options}
      value={options.find((opt) => opt.value === category)}
      onChange={(option) => setCategory(option?.value || 'popular')}
      className={styles.accardion}
      classNamePrefix="custom-select"
      isSearchable={false}
    />
  );
};

export default Accordion;
