import { logoFooter } from '@/assets/images';
import { FooterLinks, FooterSocial } from '@/data/footerLinks';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.box}>
        <div className={styles.welcome_box}>
          <img src={logoFooter} alt="logo" />
          <p className={styles.welcome_desc}>
            We have sounds that capture every mood and inspire every vision. From soothing melodies
            to electrifying beats.
          </p>
        </div>
        <div className={styles.links_box}>
          {FooterLinks.map(({ title, links }) => (
            <div key={title} className={styles.link_box}>
              <h4 className={styles.link_title}>{title}</h4>
              <ul className={styles.underlist}>
                {links.map(({ label, path }) => (
                  <li key={label} className={styles.list}>
                    <a href={path} className={styles.link}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.info_box}>
        <p className={styles.info_rights}>Modsenfy © 2000-2025, All Rights Reserved</p>
        <div className={styles.social_box}>
          <p className={styles.social_desc}>Contact us</p>
          {FooterSocial.map(({ path, icon }) => (
            <a href={path} key={icon} className={styles.social_link}>
              <img src={icon} alt="icon" className={styles.img} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
