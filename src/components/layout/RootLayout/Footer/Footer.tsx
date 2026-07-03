import logoFooter from '@/assets/images/logo-footer.svg';
import { FooterLinks, FooterSocial } from '@/data/footerLinks';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.content}>
      <div className={styles.box}>
        <div className={styles.welcome_box}>
          <img src={logoFooter} alt="logo" />
          <p className={styles.welcome_desc}>
            We have sounds that capture every mood and inspire every vision. From soothing melodies
            to electrifying beats.
          </p>
        </div>
        <div className={styles.links_box}>
          {FooterLinks.map((box) => (
            <div key={box.title} className={styles.link_box}>
              <h4 className={styles.link_title}>{box.title}</h4>
              <ul className={styles.underlist}>
                {box.links.map((link) => (
                  <li key={link.label} className={styles.list}>
                    <a href={link.path} className={styles.link}>
                      {link.label}
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
          {FooterSocial.map((link) => (
            <a href={link.path} key={link.icon} className={styles.social_link}>
              <img src={link.icon} alt="icon" className={styles.img} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
