import { useState } from 'react';
import { NavLink } from 'react-router';

import { logo } from '@/assets/images';
import { Navigation } from '@/data/navigation';
import { ROUTE_PATHS } from '@/routes/routePaths';

import styles from './Sidebar.module.scss';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.content}>
      <a href={ROUTE_PATHS.HOME} className={styles.logo}>
        <img src={logo} alt="logo" />
      </a>
      <button
        className={`${styles.burger} ${isOpen ? styles.active : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`${styles.box} ${isOpen ? styles.open : ''}`}>
        <h4 className={styles.title}>Discover</h4>
        <nav>
          <ul className={styles.underlist}>
            {Navigation.map(({ title, route, Icon }) => (
              <li className={styles.list} key={title}>
                <NavLink to={route} className={styles.link} end>
                  <Icon />
                  <p>{title}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
