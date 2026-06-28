import logo from '@/assets/images/logo.svg';
import { Navigation } from '@/data/navigation';
import { Link, NavLink } from 'react-router';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.content}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="logo" />
      </Link>
      <div className={styles.box}>
        <h4 className={styles.title}>Discover</h4>
        <nav>
          <ul className={styles.underlist}>
            {Navigation.map((nav) => (
              <li className={styles.list} key={nav.title}>
                <NavLink to={nav.route} className={styles.link} end>
                  <img src={nav.icon} alt="icon" />
                  <p>{nav.title}</p>
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
